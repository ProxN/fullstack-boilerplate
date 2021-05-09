import 'styled-components';
import { Tuple } from '@lib/types/utility-types';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ThemeSize = Record<Size, string>;

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMode: 'light' | 'dark';
    white: string;
    black: string;
    primary: string;
    lineHeight: string;
    colors: Record<string, Tuple<string, 10>>;
    radius: ThemeSize;
    fontSizes: ThemeSize;
    shadows: ThemeSize;
    fontFamily: string;
  }
}
