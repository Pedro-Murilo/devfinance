import {
  ModalLayout,
  ModalContainer,
  ScreenOnlyLabel,
  InputContainer,
  ButtonStyles,
  FormContainer,
  CancelButton,
} from "./ModalStyles";
import { ScreenOnly } from "../Balance/BalanceStyles";

const Modal = () => {

  return (
    <ModalLayout>
      <ModalContainer>
        <FormContainer>
          <ScreenOnly>New Transaction</ScreenOnly>

          <form action="">
            <InputContainer>
              <ScreenOnlyLabel htmlFor="description">
                Description
              </ScreenOnlyLabel>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
              />
            </InputContainer>
            <InputContainer>
              <ScreenOnlyLabel htmlFor="amount">Amount</ScreenOnlyLabel>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="0,00"
              />
              <small>
                Use - (negative) for spend and , (comma) to decimal number
              </small>
            </InputContainer>

            <InputContainer>
              <ScreenOnlyLabel htmlFor="date">Data</ScreenOnlyLabel>
              <input type="date" id="date" name="date" />
            </InputContainer>

            <InputContainer className="actions">
              <CancelButton type="button">Cancel</CancelButton>
              <ButtonStyles>Save</ButtonStyles>
            </InputContainer>
          </form>
        </FormContainer>
      </ModalContainer>
    </ModalLayout>
  );
};

export default Modal;
