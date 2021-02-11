import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "./lottie/13398-money-stack.json";

import { GlobalStyle } from "./globalStyle";
import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header/Header";
import TransactionsSection from "./components/Transactions/Transactions";
import BalanceSection from "./components/Balance/Balance";
import { MainContainer } from "./components/Main/MainStyles";
import GithubCorner from "./components/GithubCorner/GithubCorner";
import FooterSection from "./components/Footer/Footer";
import { ButtonTransaction } from './components/Transactions/TransactionsStyles';
import Modal from "./components/Modal/Modal";


function App() {
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  const LoadingAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="loading">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        LoadingAnimation()
      ) : (
        <GlobalProvider>
          <Header />
          <MainContainer>
            <BalanceSection />
              <ButtonTransaction onClick={openModal}>
                + New Transaction
              </ButtonTransaction>
              <TransactionsSection />
            <GithubCorner projectUrl="https://github.com/Pedro-Murilo/devfinance/" />
          </MainContainer>
          <FooterSection />
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </GlobalProvider>
      )}
      <GlobalStyle />
    </>
  );
}

export default App;
