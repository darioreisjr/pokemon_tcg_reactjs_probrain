import './Modal.css';
import CloseButton from './CloseButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
