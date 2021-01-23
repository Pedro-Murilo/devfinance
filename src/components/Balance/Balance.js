import { BalanceContainer, ScreenOnly } from "./BalanceStyles";
import Card from '../Card/Card';

const BalanceSection = () => {
  return (
  <BalanceContainer id="balance">
    <ScreenOnly>Balance</ScreenOnly>
    <Card />
  </BalanceContainer>
  )
};

export default BalanceSection;
