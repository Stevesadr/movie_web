export const changeKeyArray = (arr, poster, original) => {
  return arr.map((item) => {
    if (item.hasOwnProperty(poster)) {
      const newItem = Object.assign({}, item);
      newItem[original] = newItem[poster];
      delete newItem[poster];
      return newItem;
    }
    return item;
  });
};
