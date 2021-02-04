import styled from "styled-components";

export const DataTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #333;
  margin-top: 1.5rem;

  th:first-child,
  td:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  th:last-child,
  td:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  th {
    background: #9b9b9b;
    font-weight: normal;
    padding: 0.5rem 0.5rem;
    text-align: center;
  }

  tr {
    opacity: 0.75;
    text-align: center;
    font-size: 1.3rem;

    &:hover {
      opacity: 1;
    }

    td.description {
      color: #80da4d;
    }

    td.income {
      color: #67e220;
    }

    td.expense {
      color: #f88080;
    }
    td {
      background: #6d6d6d;
      padding: 0.4rem 0.4rem;
      font-weight: 400;

      img {
        cursor: pointer;
      }
    }
  }
`;

export const LinkStyle = styled.button`
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;

  color: #252525;
  background-image: linear-gradient(to right, #b3eb1b, #def320);

  border: none;
  padding: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 31%;
  height: 50px;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    background: #67e220;
    box-shadow: 0 0 2px #67e220, 0 0 2px #67e220, 0 0 1px #67e220,
      0 0 1px #67e220;
  }
`;
