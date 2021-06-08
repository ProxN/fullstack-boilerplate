import styled, {
  th,
  css,
  borderRadius,
  BorderRadiusProps,
  width,
  WidthProps,
  maxWidth,
  MaxWidthProps,
  compose,
} from '@xstyled/styled-components';

export interface InputBaseProps
  extends BorderRadiusProps,
    MaxWidthProps,
    WidthProps {
  /** Input appearance */
  variant?: 'filled' | 'default' | 'unstyled';

  /** if "true", set border color to red and aria-invalid on input */
  isInvalid?: boolean;
}

const inputSystem = compose(borderRadius, width, maxWidth);

const BaseInput = styled.input<InputBaseProps>`
  width: 100%;
  min-width: 0px;
  outline: none;
  position: relative;
  user-select: none;
  appearance: none;
  transition-property: border-color, background-color;
  transition-duration: default;
  transition-timing-function: ease-in-out;
  line-height: 1.4;
  font-family: inherit;
  resize: none;
  font-size: sm;
  padding: 0.6rem 1.2rem;
  color: ${th('black')};
  ${inputSystem};

  &:disabled {
    cursor: not-allowed;
    background-color: gray.1;
    opacity: 0.6;
  }
`;

export const DefaultInput = styled(BaseInput)`
  border: 1px solid ${({ theme }) => theme.colors.gray[4]};
  background-color: ${th('white')};

  &:not(:focus):not(:disabled):hover {
    border-color: gray.5;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors[theme.primary][6]};
  }

  &::placeholder {
    opacity: 0.5;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: red.6;
      border-color: red.6 !important;

      &:hover {
        border-color: red.6;
      }

      &::placeholder {
        opacity: 1;
        color: red.6;
      }
    `}
`;

export const FilledInput = styled(BaseInput)`
  background-color: gray.1;
  border: 1px solid;
  border-color: transparent;

  &::placeholder {
    opacity: 0.6;
  }

  &:not(:focus):not(:disabled):hover {
    background-color: gray.2;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors[theme.primary][6]};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: red.6;
      border-color: red.6 !important;
      background-color: red.0;

      &:hover {
        border-color: red.6;
      }

      &::placeholder {
        opacity: 1;
        color: red.6;
      }
    `}
`;

export const UnStyledInput = styled(BaseInput)`
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0;

  &:disabled {
    background-color: transparent;
  }

  &::placeholder {
    opacity: 0.6;
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: red.6;

      &::placeholder {
        opacity: 1;
        color: red.6;
      }
    `}
`;

export const InputContainer = styled.div<{ withIcon?: boolean }>`
  position: relative;

  & ${BaseInput} {
    ${({ withIcon }) =>
      withIcon &&
      css`
        padding-left: 3.2rem;
      `}
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  pointer-events: none;
  width: 3.4rem;
  opacity: 0.5;
`;
