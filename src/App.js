import { useState } from "react";
import BalanceSection from "./components/Balance/Balance";
import { ScreenOnly } from "./components/Balance/BalanceStyles";
import Header from "./components/Header/Header";
import { MainContainer } from "./components/Main/MainStyles";
import { Modal } from "./components/Modal/Modal";
import minusSvg from "./assets/minus.svg";
import {
  ButtonTransaction,
  DataTable,
} from "./components/Transactions/TransactionsStyles";
import { GlobalStyle } from "./globalStyle";
import FooterSection from "./components/Footer/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <BalanceSection />

        <section className="transaction">
          <ScreenOnly>Transactions</ScreenOnly>
          <ButtonTransaction onClick={openModal}>
            + New Transaction
          </ButtonTransaction>

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
      </MainContainer>
      <FooterSection />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
