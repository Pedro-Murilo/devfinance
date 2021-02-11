import { useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

import { DataTable} from './TransactionsStyles'
import { ScreenOnly } from "../Balance/BalanceStyles";
import { Transactions } from "./Transaction";

const TransactionsSection = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <section className="transaction">
        <ScreenOnly>Transactions</ScreenOnly>

        <DataTable className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}
          </tbody>
        </DataTable>
      </section>
    </>
  );
};

export default TransactionsSection;
