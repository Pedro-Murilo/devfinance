import { CardContainer } from './CardStyles';

const Card = () => (
  <>
    <CardContainer>
      <h3>Entry</h3>
      <p>R$ 5.000,00</p>
    </CardContainer>
    <CardContainer>
      <h3>Spend</h3>
      <p>R$ 2.000,00</p>
    </CardContainer>
    <CardContainer className="total">
      <h3>Total</h3>
      <p>R$ 3.000,00</p>
    </CardContainer>
  </>
);

export default Card;