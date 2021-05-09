import { DefaultTheme } from 'styled-components';
import colors from './colors';

const fontSizes: DefaultTheme['fontSizes'] = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2rem',
};

const radius: DefaultTheme['radius'] = {
  xs: '0.2rem',
  sm: '0.4rem',
  md: '0.6rem',
  lg: '0.8rem',
  xl: '1.2rem',
};

const shadows: DefaultTheme['shadows'] = {
  xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
  sm:
    '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
  md:
    '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  lg:
    '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
  xl:
    '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
};

const Theme: DefaultTheme = {
  colorMode: 'light',
  white: '#fff',
  black: '#000',
  primary: 'red',
  lineHeight: '1.5',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
   sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  colors,
  fontSizes,
  radius,
  shadows,
};

export default Theme;
