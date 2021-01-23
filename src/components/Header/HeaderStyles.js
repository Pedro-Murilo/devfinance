import styled, { css } from "styled-components";

const ColorNeon = "#f8da2e";
const ColorNeonSecondary = "#f8da2e";

export const HeaderContainer = styled.header`
  text-align: center;
  background: #3a3a3a;
  padding: 2rem 0 10rem;

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
