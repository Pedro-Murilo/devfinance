import styled, { css } from "styled-components";

export const ColorNeon = "#f8da2e";
export const ColorNeonSecondary = "#f8da2e";

export const BalanceContainer = styled.section`
  margin-top: -8rem;

  h2 {
    color: #fff;
    margin-top: 0;
    text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
  }
`;

export const TitleH2 = styled.h2`
  margin-top: 3.2rem;
  margin-bottom: 0.8rem;
  font-weight: normal;
  font-size: 2.5rem;
  padding-bottom: 1.5rem;

  ${({ isActive }) =>
    !isActive &&
    css`
      color: ${ColorNeon};
      text-shadow: 0 0 3px ${ColorNeon}, 0 0 3px ${ColorNeon},
        0 0 3px ${ColorNeon}, 0 0 3px ${ColorNeonSecondary};
    `}
`;

export const ScreenOnly = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
