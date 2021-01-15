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
    background: #fafafa;
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: center;
  }

  tr {
    opacity: 1;
    text-align: center;
    font-size: 1.5rem;

    &:hover {
      opacity: 0.75;
    }

    td.description {
      color: #0c9e13;
    }

    td.income {
      color: #12a454;
    }

    td.expense {
      color: #e92929;
    }
    td {
      background: #fff;
      padding: 1rem 2rem;
      font-weight: normal;
    }
  }
`;
