import styled, { css } from '@xstyled/styled-components';
import { motion } from 'framer-motion';
import { mode } from '@lib/utility/component';

export const Overylay = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) =>
    mode(
      theme.colors['blackAlpha'][8],
      theme.colors['blackAlpha'][6]
    )(theme.colorMode)};
`;

export const ModalContainer = styled(motion.div)<{
  maxW?: string;
  minH?: string;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: xs;
  box-shadow: xs;
  background-color: ${({ theme }) =>
    mode('#fff', theme.colors['dark'][9])(theme.colorMode)};
  max-width: ${({ maxW }) => maxW || '44rem'};
  ${({ minH }) =>
    minH &&
    css`
      min-height: ${minH};
    `};
`;
