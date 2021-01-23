import styled, { css } from "styled-components";

const ColorNeon = "#f8da2e";
const ColorNeonSecondary = "#f8da2e";

export const BalanceContainer = styled.section`
  margin-top: -8rem;

  h2 {
    color: #fff;
    margin-top: 0;
  }
`;

export const TitleH2 = styled.h2`
  margin-top: 3.2rem;
  margin-bottom: 0.8rem;
  font-weight: normal;
  font-size: 2.5rem;

  ${({ isActive }) =>
    !isActive &&
    css`
      color: ${ColorNeon};
      text-shadow: 0 0 5px ${ColorNeon}, 0 0 5px ${ColorNeon},
        0 0 10px ${ColorNeon}, 0 0 5px ${ColorNeonSecondary};
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
