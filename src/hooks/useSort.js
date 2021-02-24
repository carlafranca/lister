import { useState } from "react";

const useSort = (initialState = []) => {
  const [isSorted, regularSetState] = useState(initialState);

  const setIsSorted = (list, sortProp, sortType) => {
    if (sortType === "alpha") {
      regularSetState(
        [...list].sort((a, b) => b[sortProp].localeCompare(a[sortProp]))
      );
    }
    if (sortType === "int") {
      regularSetState([...list].sort((a, b) => b[sortProp] - a[sortProp]));
    }
  };

  return [isSorted, setIsSorted];
};

export default useSort;
