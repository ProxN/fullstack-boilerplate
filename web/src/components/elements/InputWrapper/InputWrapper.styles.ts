import styled, { th } from '@xstyled/styled-components';

export const Wrapper = styled.div`
  font-family: ${th('fontFamily')};
  color: ${th('black')};
  line-height: 1.4;

  & input,
  & textarea {
    margin-top: 0.4rem;
  }
`;

export const Required = styled.span`
  color: red.6;
  margin-left: 0.3rem;
`;
