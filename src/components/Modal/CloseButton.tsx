import { RiCloseLargeFill } from 'react-icons/ri';

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button
      onClick={onClose}
      className="close-button"
    >
      <RiCloseLargeFill size={24} />
    </button>
  );
};

export default CloseButton;
