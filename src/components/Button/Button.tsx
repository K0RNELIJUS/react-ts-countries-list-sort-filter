import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './type';

const Button = ({ text, icon, action }: ButtonProps) => {
  return (
    <ButtonStyled onClick={action}>
      {text}
      <span>{icon}</span>
    </ButtonStyled>
  );
};

export default Button;
