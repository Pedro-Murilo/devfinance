import styled, { css } from 'styled-components';

import { ColorNeon, ColorNeonSecondary } from '../Balance/BalanceStyles';

export const FooterContainer = styled.footer`
    text-align: center;
    padding: 5rem 0 2rem;
    color: #000;
    opacity: 0.6;
    font-size: 2rem;

    p:first-child {
        font-weight: 100;
        color: #fff;

        ${({ isActive }) =>
      !isActive &&
      css`
        color: ${ColorNeon};
        text-shadow: 0 0 5px ${ColorNeon}, 0 0 5px ${ColorNeon},
          0 0 10px ${ColorNeon}, 0 0 5px ${ColorNeonSecondary};
      `}
    }
`