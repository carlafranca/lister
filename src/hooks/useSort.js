import { useReducer } from "react";

const useSort = (initialValue = []) => {
  function sortArray(state, action) {
    switch (action.type) {
      case "alpha":
        initialValue = [...action.payload.list].sort((a, b) =>
          b[action.payload.sortProp].localeCompare(a[action.payload.sortProp])
        );
        return initialValue;
      case "int":
        initialValue = [...action.payload.list].sort(
          (a, b) => b[action.payload.sortProp] - a[action.payload.sortProp]
        );
        return initialValue;

      default:
        return initialValue;
    }
  }

  return useReducer(sortArray, initialValue);
};

export default useSort;
