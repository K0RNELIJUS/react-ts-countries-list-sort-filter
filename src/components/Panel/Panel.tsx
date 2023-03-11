import { useContext } from 'react';
import { CountriesContext } from '../../context/ContextProvider';
import { PanelStyled } from './Panel.styled';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button';
import FILTER_OPTIONS from '../../shared/constants/filterOptions';
import { PanelProps } from './type';

const Panel = ({ title }: PanelProps) => {
  // Context
  const { toggleSort, handleToggleSort } = useContext(CountriesContext);

  return (
    <PanelStyled>
      <h2>{title}</h2>
      <div>
        <div>
          <Dropdown options={FILTER_OPTIONS} />
        </div>
        <div>
          <Button
            text={'Sort'}
            icon={
              toggleSort ? (
                <i className='fa-solid fa-arrow-down-a-z'></i>
              ) : (
                <i className='fa-solid fa-arrow-up-a-z'></i>
              )
            }
            action={handleToggleSort}
          />
        </div>
      </div>
    </PanelStyled>
  );
};

export default Panel;
