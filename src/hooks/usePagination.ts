const usePagination = (array: any[] | undefined, amount: number): any[][] => {
  return array?.reduce(
    (rows, key, index) =>
      (index % amount === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
};

export default usePagination;
