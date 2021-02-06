import styled, { css } from "styled-components";

const h3Styles = css`
  font-size: 1.7rem;
  font-weight: normal;
`;

const pStyles = css`
  font-size: 2rem;
  line-height: 3rem;
  margin-top: 1rem;
`;

export const CardContainer = styled.div`
  background: #2c2c2c;
  padding: 1.5rem 2rem;
  border-radius: 0.7rem;
  margin-bottom: 2rem;

  color: #b8b8b8;
  box-shadow: 1px 1px 10px 3px rgb(0, 0, 0, 0.5);
  transition: 0.2s;

  h3 {
    ${h3Styles};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    ${pStyles}
  }

  &.total {
    background-image: linear-gradient(to right, #f8da2e, #cf9c0e);
    color: #252525;
  }

  &:hover {
    transform: translateY(-5%);
  }
`;
