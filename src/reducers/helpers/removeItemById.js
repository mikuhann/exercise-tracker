export const removeItemById = (array, id) => {
  return array.filter((item) => item._id !== id);
};
