/* eslint-disable no-dupe-keys */
import { useRef, useEffect, useCallback, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { animated } from "react-spring";
import {
  ButtonStyles,
  CancelButton,
  CloseModalButton,
  FormContainer,
  InputContainer,
  ModalContainer,
  ModalLayout,
  ScreenOnlyLabel,
} from "./ModalStyles";
import { ScreenOnly } from "../Balance/BalanceStyles";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text,
      amount: +amount,
      date,
    };
    addTransaction(newTransaction);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <ModalLayout ref={modalRef} onClick={closeModal}>
          <animated.div>
            <ModalContainer showModal={showModal}>
              <CloseModalButton
                aria-label="close"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <FormContainer>
                <ScreenOnly>New Transaction</ScreenOnly>

                <form onSubmit={onSubmit}>
                  <InputContainer>
                    <ScreenOnlyLabel htmlFor="description">
                      Description
                    </ScreenOnlyLabel>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Description"
                      value={text} 
                      onChange={(e) => setText(e.target.value)} 
                    />
                  </InputContainer>
                  <InputContainer>
                    <ScreenOnlyLabel htmlFor="amount">Amount</ScreenOnlyLabel>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      placeholder="0,00"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <small>
                      Use - (negative) for spend and , (comma) to decimal number
                    </small>
                  </InputContainer>

                  <InputContainer>
                    <ScreenOnlyLabel htmlFor="date">Data</ScreenOnlyLabel>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </InputContainer>

                  <InputContainer className="actions">
                    <CancelButton
                      type="button"
                      aria-label="close"
                      onClick={() => setShowModal((prev) => !prev)}
                    >
                      Cancel
                    </CancelButton>
                    <ButtonStyles>Save</ButtonStyles>
                  </InputContainer>
                </form>
              </FormContainer>
            </ModalContainer>
          </animated.div>
        </ModalLayout>
      ) : null}
    </>
  );
};

export default Modal;
