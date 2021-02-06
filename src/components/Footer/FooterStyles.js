import styled from 'styled-components';

import { ColorNeon } from '../Balance/BalanceStyles';

export const FooterContainer = styled.footer`
    text-align: center;
    margin: 0 auto;
    padding: 4.5rem 0 0 0;
    color: #f0f0f0;
    font-size: 1.4rem;
    opacity: 0.6;

    p:first-child {
        font-weight: 400;
        color: ${ColorNeon};
    }
`