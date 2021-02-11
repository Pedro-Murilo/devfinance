import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import minusSvg from "../../assets/minus.svg";

export const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <>
      <td className="description">{transaction.text} </td>
      <td className="expense">
        {sign} ${Math.abs(transaction.amount)}
      </td>
      <td className="date">23/01/2021</td>
      <td>
        <img
          src={minusSvg}
          alt="Remove Transaction"
          onClick={() => deleteTransaction(transaction.id)}
        />
      </td>
    </>
  );
};
