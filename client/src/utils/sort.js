const alphabetical = (a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
};

const year = (a, b) => {
  return a.year - b.year;
};

const dateAdded = (a, b) => {
  return a.createdAt - b.createdAt;
};

const rating = (a, b) => {
  return a.rating - b.rating;
};

export const sort = (arr, type) => {
  const originalArr = [...arr];
  originalArr.sort(
    type === "alphabetical"
      ? alphabetical
      : type === "year"
      ? year
      : type === "rating"
      ? rating
      : dateAdded
  );
  return type ? originalArr : arr;
};
