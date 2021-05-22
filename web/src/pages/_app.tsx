import { AppProps } from 'next/app';
import { Preflight, ThemeProvider } from '@xstyled/styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles } from '@lib/styles';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={Theme}>
      <Preflight />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
