import { BalanceContainer, TitleH2 } from "./BalanceStyles";

const BalanceSection = () => (
  <BalanceContainer>
    <TitleH2>Balance</TitleH2>
    <div className="card">
      <h3>Entry</h3>
      <p>R$ 5.000,00</p>
    </div>
    <div className="card">
      <h3>Exit</h3>
      <p>R$ 2.000,00</p>
    </div>
    <div className="card total">
      <h3>Total</h3>
      <p>R$ 3.000,00</p>
    </div>
  </BalanceContainer>
);

export default BalanceSection;
