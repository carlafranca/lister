export const sortArr = (list, sortProp) => {
  return sortProp === "name"
    ? [...list].sort((a, b) => b.name.localeCompare(a.name))
    : [...list].sort((a, b) => b[sortProp] - a[sortProp]);
};
