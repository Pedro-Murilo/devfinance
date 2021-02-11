import { useState, useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

import {ButtonTransaction, DataTable} from './TransactionsStyles'
import { ScreenOnly } from "../Balance/BalanceStyles";
import { Modal } from "../Modal/Modal";
import { Transactions } from "./Transaction";

const TransactionsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const { transactions } = useContext(GlobalContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <section className="transaction">
        <ScreenOnly>Transactions</ScreenOnly>
        <ButtonTransaction onClick={openModal}>
          + New Transaction
        </ButtonTransaction>

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
            <tr>
              {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}
            </tr>
          </tbody>
        </DataTable>
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default TransactionsSection;
