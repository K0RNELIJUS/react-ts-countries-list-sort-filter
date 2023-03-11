import { DropdownStyled } from './Dropdown.styled';
import { useContext } from 'react';
import { CountriesContext } from '../../context/ContextProvider';
import { DropdownProps } from './type';

const Dropdown = ({ options }: DropdownProps) => {
  const { handleFilterBy } = useContext(CountriesContext);

  return (
    <DropdownStyled onChange={handleFilterBy}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </DropdownStyled>
  );
};

export default Dropdown;
