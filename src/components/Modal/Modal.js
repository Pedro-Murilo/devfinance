import { ModalStyles, ModalWrapper } from "./ModalStyles";
import { ScreenOnly } from '../Balance/BalanceStyles';

const Modal = () => {
  return (
    <ModalStyles isActive={false}>
      <ModalWrapper>
        <div className="form">
          <ScreenOnly>Nova Transação</ScreenOnly>

          <form action="">
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" placeholder="Description" />
            </div>
            <div className="input-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" name="amount" placeholder="0,00" />
              <small>Use - (negative) for spend and , () to float</small>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </ModalStyles>
  );
};

export default Modal;
