import { RiCloseLargeFill } from 'react-icons/ri';
import { CloseButtonProps } from '../../@types/closeButton';
import './Modal.css';

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button onClick={onClose} className="close-button">
      <RiCloseLargeFill size={24} />
    </button>
  );
};

export default CloseButton;
