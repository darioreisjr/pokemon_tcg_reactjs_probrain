import CardImage from './CardImage';
import CardDetails from './CardDetails';
import { CardProps } from '../../@types/card';
import './Card.css';

const Card = ({ card, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <CardImage src={card.images.small} alt={card.name} />
      <CardDetails card={card} />
    </div>
  );
};

export default Card;
