import { ModalStyles, ModalWrapper } from './ModalStyles';

const Modal = () => {
    return (
        <ModalStyles isActive>
            <ModalWrapper>
                <div className="form">
                    <h2>Nova Transação</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="description"></label>
                            <input type="text" id="description" name="description" />
                        </div>
                    </form>
                </div>
            </ModalWrapper>
        </ModalStyles>
    )
}

export default Modal;