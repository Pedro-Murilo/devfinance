import styled, { css } from 'styled-components';

const h3Styles = css`
    font-size: 1rem;
    font-weight: normal;
`

const pStyles = css`
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
`

export const CardContainer = styled.div`
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: .25rem;
    margin-bottom: 2rem;

    color: #22e73c;

    h3 {
        ${h3Styles}
    }

    p {
        ${pStyles}
    }

    &.total {
        background: #49aa26;
        color: #fff;
    }
`
