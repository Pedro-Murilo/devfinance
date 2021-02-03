import { DataTable, LinkStyle } from "./TransactionsStyles";
import { ScreenOnly } from "../Balance/BalanceStyles";

import minusSvg from "../../assets/minus.svg";

const TransactionSection = () => {
  
  return (
    <section className="transaction">
      <ScreenOnly>Transactions</ScreenOnly>
      <LinkStyle href="#">+ New Transaction</LinkStyle>

      <DataTable>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="description">Food</td>
            <td className="expense">- R$ 500,00</td>
            <td className="date">23/01/2021</td>
            <td>
              <img src={minusSvg} alt="Remove Transaction" />
            </td>
          </tr>
          <tr>
            <td className="description">Website</td>
            <td className="income">R$ 5000,00</td>
            <td className="date">23/01/2021</td>
            <td>
              <img src={minusSvg} alt="Remove Transaction" />
            </td>
          </tr>
          <tr>
            <td className="description">Internet</td>
            <td className="expense">- R$ 200,00</td>
            <td className="date">23/01/2021</td>
            <td>
              <img src={minusSvg} alt="Minus Transaction" />
            </td>
          </tr>
        </tbody>
      </DataTable>
    </section>
  );
};

export default TransactionSection;
