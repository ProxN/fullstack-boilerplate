import { useState } from 'react';
import { AppProps } from 'next/app';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles } from '@lib/styles';
import { IconButton } from '@components/elements/IconButton';
import { Icon } from '@components/elements/Icon';
import { Box } from '@components/layout/Box';

const App = (props: AppProps) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const { Component, pageProps } = props;

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeProvider theme={{ ...Theme, colorMode }}>
      <Preflight />
      <GlobalStyles />
      <Component {...pageProps} />
      <Box position='absolute' top={12} right={12}>
        <IconButton
          variant='ghost'
          size='lg'
          onClick={toggleColorMode}
          ariaLabel='dark mode'
          icon={<Icon name='moon' />}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
