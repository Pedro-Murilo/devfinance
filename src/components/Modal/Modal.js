import { ModalStyles, ModalContainer, ScreenOnlyLabel, InputContainer, ButtonStyles, FormContainer } from "./ModalStyles";
import { ScreenOnly } from '../Balance/BalanceStyles';

const Modal = () => {
  return (
    <ModalStyles isActive>
      <ModalContainer>
        <FormContainer>
          <ScreenOnly>Nova Transação</ScreenOnly>

          <form action="">
            <InputContainer>
              <ScreenOnlyLabel htmlFor="description">Description</ScreenOnlyLabel>
              <input type="text" id="description" name="description" placeholder="Description" />
            </InputContainer>
            <InputContainer>
              <ScreenOnlyLabel htmlFor="amount">Amount</ScreenOnlyLabel>
              <input type="number" id="amount" name="amount" placeholder="0,00" />
              <small>Use - (negative) for spend and , (comma) to decimal number</small>
            </InputContainer>

            <InputContainer>
              <ScreenOnlyLabel for="date">Data</ScreenOnlyLabel>
              <input type="date" id="date" name="date" />
            </InputContainer>

            <InputContainer className="actions">
              <a href="/">Cancel</a>
              <ButtonStyles>Save</ButtonStyles>
            </InputContainer>
          </form>
        </FormContainer>
      </ModalContainer>
    </ModalStyles>
  );
};

export default Modal;
