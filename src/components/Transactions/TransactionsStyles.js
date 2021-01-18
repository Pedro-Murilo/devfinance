import styled from "styled-components";

export const DataTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #333;

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
    padding: 1rem 2rem;
    text-align: center;
  }

  tr {
    opacity: 0.75;
    text-align: center;
    font-size: 1.7rem;

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
      padding: 1rem 2rem;
      font-weight: 400;
    }
  }
`;
