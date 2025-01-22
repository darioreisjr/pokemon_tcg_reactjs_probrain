interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage = ({ src, alt }: CardImageProps) => {
  return <img src={src} alt={alt} className="card-image" />;
};

export default CardImage;
