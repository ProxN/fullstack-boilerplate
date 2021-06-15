import Link from 'next/link';
import { Button } from '@components/elements/Button';
import { Heading } from '@components/elements/Heading';
import { Box } from '@components/layout/Box';
import { Center } from '@components/layout/Center';
import { Space } from '@components/layout/Space';

const Index = () => {
  return (
    <Box>
      <Center minH='100vh'>
        <Box>
          <Heading
            textAlign={{ xs: 'center' }}
            as='h1'
            size={{ xs: '3xl', md: '4xl' }}
          >
            Welcome to the Fullstack boilerplate
          </Heading>
          <Space mt='1rem' justifyContent='center'>
            <Link href='/login'>
              <Button as='a' variant='ghost'>
                Log in
              </Button>
            </Link>
            <Link href='/signup'>
              <Button as='a' color='violet'>
                Sign up
              </Button>
            </Link>
          </Space>
        </Box>
      </Center>
    </Box>
  );
};

export default Index;
