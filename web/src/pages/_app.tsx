import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@lib/theme';
import { GlobalStyles, ResetStyles } from '@lib/styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <ResetStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
