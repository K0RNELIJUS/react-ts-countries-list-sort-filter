import { createContext, useState, useEffect } from 'react';
import {
  CountryProps,
  ContextProviderProps,
  CountriesContextProps,
} from './type';
import useFetch from '../hooks/useFetch';
import usePagination from '../hooks/usePagination';

export const CountriesContext = createContext({} as CountriesContextProps);

const ContextProvider = ({ children }: ContextProviderProps) => {
  // Fetch data
  const { data, error, isLoading } = useFetch(
    'https://restcountries.com/v2/all?fields=name,region,area'
  );

  // State
  const [toggleSort, setToggleSort] = useState(false);
  const [filterBy, setFilterBy] = useState('all');
  const [displayedCountries, setDisplayedCountries] = useState<
    CountryProps[] | undefined
  >(undefined);
  const [page, setPage] = useState(0);

  // Side effects
  useEffect(() => {
    setDisplayedCountries(data);
  }, [data]);

  // Handlers
  const handleSetPage = (value: number) => setPage(value);

  const handleToggleSort = () => {
    setToggleSort(!toggleSort);
    sortByName();
  };

  // Sort function
  const sortByName = () => {
    if (toggleSort) {
      const sorted = [...(displayedCountries as CountryProps[])].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      setDisplayedCountries(sorted);
    } else {
      const sorted = [...(displayedCountries as CountryProps[])].sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
      setDisplayedCountries(sorted);
    }
  };

  // Filter function
  const handleFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilterBy(value);

    switch (value) {
      case 'all':
        setDisplayedCountries(data);
        setToggleSort(false);
        setPage(0);
        break;
      case 'oceania':
        const oceaniaCountries = data?.filter(
          (country: { region: string }) => country.region === 'Oceania'
        );
        setDisplayedCountries(oceaniaCountries);
        setToggleSort(false);
        setPage(0);
        break;
      case 'smaller':
        const areaLithuania = data?.filter(
          (country: { name: string }) => country.name === 'Lithuania'
        )[0].area;
        const smallerThanLt = data?.filter(
          (country: { area: string }) =>
            areaLithuania && country.area < areaLithuania
        );
        setDisplayedCountries(smallerThanLt);
        setToggleSort(false);
        setPage(0);
        break;
      default:
        break;
    }
  };

  const paginatedCountries = usePagination(displayedCountries, 9);

  return (
    <CountriesContext.Provider
      value={{
        error,
        isLoading,
        toggleSort,
        filterBy,
        displayedCountries,
        paginatedCountries,
        page,
        sortByName,
        handleToggleSort,
        handleFilterBy,
        handleSetPage,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default ContextProvider;
