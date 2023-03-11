import { useContext } from 'react';
import Card from '../Card';
import { CountriesContext } from '../../context/ContextProvider';
import { ListStyled } from './List.styled';
import { CountryProps } from './type';
import Pagination from '../Pagination';

const List = () => {
  const { error, isLoading, page, paginatedCountries } =
    useContext(CountriesContext);

  return (
    <>
      <ListStyled>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          paginatedCountries &&
          paginatedCountries[page]?.map((country: CountryProps) => (
            <li key={country.name}>
              <Card
                country={country.name}
                region={country.region}
                area={country.area}
              />
            </li>
          ))
        )}
      </ListStyled>
      <Pagination />
    </>
  );
};

export default List;
