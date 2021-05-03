import 'reflect-metadata';
import { config } from 'dotenv';
config({ path: './config.env' });

import express from 'express';
import session from 'express-session';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import connection from './conn';
import { resolvers } from './api';
import authChecker from './lib/authChecker';
import {
  CORS_ORIGIN,
  PORT,
  IS_PROD,
  SESSION_SECRET,
  SENTRY_DSN,
} from './lib/config';

const Main = async () => {
  await connection();
  const app = express();

  if (IS_PROD) {
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [new Tracing.Integrations.Express({ app })],
      tracesSampleRate: 1.0,
    });
  }

  const RedisStore = connectRedis(session);
  const redis = new Redis('127.0.0.1:6379');

  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: [CORS_ORIGIN, 'http://localhost:3000'],
      credentials: true,
    })
  );
  app.use(cookieParser());

  app.use(
    session({
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      name: 'sid',
      secret: SESSION_SECRET || 'secret',
      saveUninitialized: false,
      resave: false,
      cookie: {
        httpOnly: true,
        secure: IS_PROD,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
      },
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
      authChecker,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(PORT, () => console.log(`Server starting at port: ${PORT}`));
};

Main();
