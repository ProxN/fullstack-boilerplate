import styled, {
  th,
  css,
  system,
  space,
  SpaceProps,
} from '@xstyled/styled-components';
import { Size } from '@lib/theme';
import { getColor, isLight } from '@lib/utility/color';

export interface BaseButtonProps {
  /**  button size */
  size?: 'sm' | 'md' | 'lg';

  /** Border radius size */
  radius?: Size;

  /** Set button width to 100% of parent container */
  fullWidth?: boolean;

  /** Set button color from Theme */
  color?: string;
}

const sizes = {
  sm: {
    height: '2.4rem',
    padding: '0 .7rem',
  },
  md: {
    height: '3.2rem',
    padding: '.4rem 1.5rem',
  },
  lg: {
    height: '4rem',
    padding: '.6rem 1.5rem',
  },
};

const BaseButton = styled.button<BaseButtonProps>`
  ${({ size }) => size && { ...sizes[size] }};
  ${({ radius, theme }) =>
    radius && css({ borderRadius: theme.radii[radius] })};
  ${({ fullWidth }) => fullWidth && css({ width: '100%' })};
  font-size: ${({ size, theme }) =>
    size === 'lg' ? theme.fontSizes.md : theme.fontSizes.sm};
  font-family: ${th('fontFamily')};
  transition-property: default;
  transition-duration: normal;
  transition-timing-function: ease-in-out;
  background: transparent;
  user-select: none;
  border: 1px solid transparent;
  line-height: 1.54;
  appearance: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  position: relative;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    ${system.apply({ ring: 2, ringColor: 'blue.3' })}
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export const SolidButton = styled(BaseButton)<BaseButtonProps>`
  ${({ color, theme }) => {
    if (!color) return css``;
    const col = getColor(theme.colors, color, 6);
    return css`
      background: ${col};
      color: ${isLight(col) ? theme.black : theme.white};
      border-color: ${col};

      :hover:not(:disabled) {
        background: ${getColor(theme.colors, color, 7)};
      }

      :active:not(:disabled) {
        background: ${getColor(theme.colors, color, 8)};
      }

      :disabled {
        opacity: 0.6;
        border-color: transparent;
        background: ${getColor(theme.colors, color, 5)};
      }
    `;
  }}
`;

export const OutlineButton = styled(BaseButton)<BaseButtonProps>`
  ${({ color, theme }) => {
    if (!color) return css``;
    const col = getColor(theme.colors, color, 6);
    return css`
      background: transparent;
      color: ${col};
      border-color: ${col};

      :hover:not(:disabled) {
        background: ${getColor(theme.colors, color, 0)};
      }

      :active:not(:disabled) {
        background: ${getColor(theme.colors, color, 1)};
      }

      :disabled {
        opacity: 0.4;
        background: transparent;
      }
    `;
  }}
`;

export const LightButton = styled(BaseButton)<BaseButtonProps>`
  ${({ color, theme }) => {
    if (!color) return css``;
    const col = getColor(theme.colors, color, 0);
    return css`
      background: ${col};
      color: ${getColor(theme.colors, color, 9)};
      border-color: ${col};

      :hover:not(:disabled) {
        background: ${getColor(theme.colors, color, 1)};
      }

      :active:not(:disabled) {
        background: ${getColor(theme.colors, color, 2)};
      }

      :disabled {
        opacity: 0.6;
      }
    `;
  }}
`;

export const LinkButton = styled(BaseButton)<BaseButtonProps>`
  ${({ color, theme }) => {
    if (!color) return css``;
    return css`
      background: transparent;
      color: ${getColor(theme.colors, color, 6)};
      border-color: transparent;

      &:not(:disabled):hover {
        color: ${getColor(theme.colors, color, 5)};
      }

      &:not(:disabled):active {
        transform: none;
      }

      :disabled {
        opacity: 0.6;
      }
    `;
  }}
`;

export const ButtonIcon = styled.span<SpaceProps>`
  ${space}
  display:flex;
  align-items: center;
`;
