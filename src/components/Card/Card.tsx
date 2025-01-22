import CardImage from './CardImage';
import CardDetails from './CardDetails';
import './Card.css';

interface CardProps {
  card: {
    id: string;
    name: string;
    images: {
      small: string;
    };
    types?: string[];
    rarity?: string;
    attacks?: Array<{
      name: string;
      damage: string;
    }>;
  };
  onClick: () => void;
}

const Card = ({ card, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <CardImage src={card.images.small} alt={card.name} />
      <CardDetails card={card} />
    </div>
  );
};

export default Card;
