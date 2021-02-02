import React from 'react';
import { NewTransaction, ModalStyles, ModalContainer, ScreenOnlyLabel, InputContainer, ButtonStyles, FormContainer } from "./ModalStyles";

const Modal = () => {

  return (
    <ModalStyles isActive={false}>
      <ModalContainer>
        <FormContainer>
          <NewTransaction>New Transaction</NewTransaction>

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
              <ScreenOnlyLabel htmlFor="date">Data</ScreenOnlyLabel>
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
