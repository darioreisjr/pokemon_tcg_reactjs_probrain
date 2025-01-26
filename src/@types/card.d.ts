export interface Card {
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
}

export interface CardProps {
  card: Card;
  onClick: () => void;
}
