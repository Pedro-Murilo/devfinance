import styled, { css } from "styled-components";

import { ColorNeon, ColorNeonSecondary } from "../Balance/BalanceStyles";

export const HeaderContainer = styled.header`
  text-align: center;
  background: #3b3a3a;
  padding: 2rem 0 10rem;
  position: relative;
  z-index: -1;

  .type {
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

  @media (max-width: 440px) {
    .type {
      padding-top: 1.5rem;
    }
  }
`;

export const EasterEgg = styled.p`
  position: absolute;
  color: #000;
  opacity: 1;
  font-weight: 700;
  top: 13.5rem;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const AnimationLoad = styled.div`
  position: absolute;
  width: 100%;
  margin-top: -100px;
  z-index: -2;
`;
