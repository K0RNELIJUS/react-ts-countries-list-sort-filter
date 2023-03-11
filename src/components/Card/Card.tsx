import { CardStyled } from './Card.style';
import { CardProps } from './type';

const Card = ({ country, region, area }: CardProps) => {
  return (
    <CardStyled>
      <h3>{country}</h3>
      <p>Region: {region}</p>
      <p>
        Area: {area} km<sup>2</sup>
      </p>
    </CardStyled>
  );
};

export default Card;
