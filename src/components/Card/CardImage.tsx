import { CardImageProps } from '../../@types/cardImage';
import './Card.css';

const CardImage = ({ src, alt }: CardImageProps) => {
  return <img src={src} alt={alt} className="card-image" />;
};

export default CardImage;
