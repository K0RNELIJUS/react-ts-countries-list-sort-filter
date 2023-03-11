import { useContext } from 'react';
import { CountriesContext } from '../../context/ContextProvider';
import { PaginationBtnStyled, PaginationStyled } from './Pagination.styled';

const Pagination = () => {
  const { handleSetPage, page, paginatedCountries } =
    useContext(CountriesContext);

  return (
    <PaginationStyled>
      {paginatedCountries?.map((_, index: number) => (
        <PaginationBtnStyled
          key={index}
          onClick={() => handleSetPage(index)}
          isActive={page === index}>
          {index + 1}
        </PaginationBtnStyled>
      ))}
    </PaginationStyled>
  );
};

export default Pagination;
