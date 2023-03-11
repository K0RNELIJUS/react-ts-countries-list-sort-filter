export type ContextProviderProps = {
  children: React.ReactNode;
};

export type CountryProps = {
  name: string;
  region: string;
  area: string;
};

export type CountriesContextProps = {
  error: string;
  isLoading: boolean;
  handleToggleSort: () => void;
  toggleSort: boolean;
  handleFilterBy: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterBy: string;
  sortByName: () => void;
  displayedCountries: CountryProps[] | undefined;
  page: number;
  handleSetPage: (value: number) => void;
  paginatedCountries: CountryProps[][] | undefined;
};
