import Header from "../Header/Header";
import { MainContainer } from "./MainStyles";
import BalanceSection from "../Balance/Balance";
import TransactionSection from "../Transactions/Transactions";

const Main = () => (
  <>
    <Header />
    <MainContainer>
      <BalanceSection />
      <TransactionSection />
    </MainContainer>
  </>
);

export default Main;
