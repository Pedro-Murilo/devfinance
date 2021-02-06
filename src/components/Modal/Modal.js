import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Lottie from 'react-lottie';
import animationData from '../../lottie/lf30_money-rain.json';
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
    <div className="loading--rain">
      <Lottie options={defaultOptions} height={175} width={'100%'} />
    </div>
  );
};

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

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
          <animated.div style={animation}>
            <ModalContainer showModal={showModal}>
              <CloseModalButton
                aria-label="close"
                onClick={() => setShowModal((prev) => !prev)}
                />
                {LoadingAnimation()}
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
