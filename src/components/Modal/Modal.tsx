import { ModalProps } from '../../@types/modal';
import CloseButton from './CloseButton';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
