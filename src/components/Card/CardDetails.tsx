interface CardDetailsProps {
  card: {
    name: string;
    types?: string[];
    rarity?: string;
  };
}

const CardDetails = ({ card }: CardDetailsProps) => {
  return (
    <div className="card-details">
      <h3>{card.name}</h3>
      {card.types && (
        <div className="card-types">
          {card.types.map((type) => (
            <span key={type} className="type-badge">
              {type}
            </span>
          ))}
        </div>
      )}
      {card.rarity && (
        <p className="card-rarity">
          Raridade: {card.rarity}
        </p>
      )}
    </div>
  );
};

export default CardDetails;
