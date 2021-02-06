import styled, { css } from "styled-components";

import { ColorNeon, ColorNeonSecondary } from "../Balance/BalanceStyles";

export const HeaderContainer = styled.header`
  text-align: center;
  background: #3B3A3A;
  padding: 2rem 0 10rem;
  position: relative;
  z-index: -1;

  h1 {
    font-weight: 100;
    font-size: 3.5rem;
    color: #fff;

    ${({ isActive }) =>
      !isActive &&
      css`
        color: ${ColorNeon};
        text-shadow: 0 0 5px ${ColorNeon}, 0 0 5px ${ColorNeon},
          0 0 10px ${ColorNeon}, 0 0 5px ${ColorNeonSecondary};
      `}
  }
`;

export const AnimationLoad = styled.div`
  position: absolute;
  width: 100%;
  margin-top: -100px;
  z-index: -2;
`;
