import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import minusSvg from "../../assets/minus.svg";

export const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  //const sign = transaction.amount < 0 ? "-" : "+";

  const moneyFormatter = (value) => {
    const sign = Number(value) < 0 ? '- ' : '';

    value = String(value).replace(/\D/g, '');
    value = Number(value);

    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return sign + value;
  };

  const dateFormatter = (date) => {
    const splittedDate = date.split('-');

    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  };

  return (
    <tr>
      <td className="description">{transaction.text} </td>
      <td className={transaction.amount > 0 ? 'income' : 'expense'}>
        {moneyFormatter(transaction.amount)}
      </td>
      <td className="date">{dateFormatter(transaction.date)}</td>
      <td>
        <img
          src={minusSvg}
          alt="Remove Transaction"
          onClick={() => deleteTransaction(transaction.id)}
        />
      </td>
    </tr>
  );
};
