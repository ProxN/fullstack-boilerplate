import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles } from '@lib/styles';
import { IconButton } from '@components/elements/IconButton';
import { Toaster } from '@components/elements/Toaster';
import { Icon } from '@components/elements/Icon';
import { Box } from '@components/layout/Box';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeProvider theme={{ ...Theme, colorMode }}>
      <Preflight />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
      <Box position='absolute' top={12} right={12}>
        <IconButton
          variant='ghost'
          size='lg'
          onClick={toggleColorMode}
          ariaLabel='dark mode'
          icon={<Icon name='moon' />}
        />
      </Box>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
