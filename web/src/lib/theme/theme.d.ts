import 'styled-components';
import { DefaultTheme as XStyledDefaultTheme } from '@xstyled/styled-components';
import { Tuple } from '@lib/types/utility-types';
import { SpaceType } from './space';
import {
  TimingFunctions,
  TransitionDuration,
  TransitionProperties,
} from './transition';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ThemeSize = Record<Size, string | number>;

declare module 'styled-components' {
  export interface DefaultTheme extends XStyledDefaultTheme {
    colorMode: 'light' | 'dark';
    white: string;
    black: string;
    primary: string;
    lineHeight: string;
    fontFamily: string;
    colors: Record<string, Tuple<string, 10>>;
    radii: ThemeSize;
    fontSizes: ThemeSize;
    shadows: ThemeSize;
    screens: ThemeSize;
    space: SpaceType;
    durations: TransitionDuration;
    timingFunctions: TimingFunctions;
    transitionProperties: TransitionProperties;
  }
}
