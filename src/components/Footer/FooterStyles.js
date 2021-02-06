import styled, { css } from 'styled-components';

import { ColorNeon, ColorNeonSecondary } from '../Balance/BalanceStyles';

export const FooterContainer = styled.footer`
    text-align: center;
    margin: 0 auto;
    padding: 4rem 0 0 0;
    color: #f0f0f0;
    font-size: 1.4rem;

    p:first-child {
        font-weight: 100;

        ${({ isActive }) =>
      !isActive &&
      css`
        color: ${ColorNeon};
        text-shadow: 0 0 5px ${ColorNeon}, 0 0 5px ${ColorNeon},
          0 0 10px ${ColorNeon}, 0 0 5px ${ColorNeonSecondary};
      `}
    }
`