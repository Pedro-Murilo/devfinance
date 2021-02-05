import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const ModalLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 15px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #e46;
`;

export const CancelButton = styled.button`
  color: #252525;
    border: 2px #e73023 solid;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, #e71313, #e44646);

    opacity: 0.6;
    transition: 0.2s;
    width: 48%;
    cursor: pointer;

    &:hover {
      opacity: 1;
      color: #252525;
      box-shadow: 0 0 2px #e44646, 0 0 2px #e44646, 0 0 1px #e44646,
        0 0 1px #e44646;
    }
`

export const ModalContainer = styled.div`
  background-color: #222;
  padding: 2.4rem;
  border-radius: 0.5rem;
  position: relative;
  z-index: 10;
`;

export const ScreenOnlyLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const ButtonStyles = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.2rem;
  border: none;

  color: #252525;
  background-image: linear-gradient(to right, #b3eb1b, #def320);

  padding: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  width: 48%;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    background: #67e220;
    box-shadow: 0 0 2px #67e220, 0 0 2px #67e220, 0 0 1px #67e220,
      0 0 1px #67e220;
  }
`;

export const FormContainer = styled.div`
  max-width: 500px;

  h2 {
    margin-top: 0;
  }

  input {
    border: none;
    border-radius: 0.2rem;
    padding: 0.8rem;
    width: 100%;
  }
`;

export const InputContainer = styled.div`
    margin-top: .8rem;

    small {
        opacity: 0.4;
        color: #fff;
    }

    &.actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const NewTransaction = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`
