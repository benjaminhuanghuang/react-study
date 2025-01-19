/*
    create an array of numbers ranging from start (inclusive) to end (exclusive)
    range(3, 7)) =>  [3, 4, 5, 6]
*/
export const range = (start, end) => {
  /*
    The .keys() method is called on the array. It returns an iterator containing the keys (indexes) of the array.
    */
  return [...Array(end - start).keys()].map((el) => el + start);
};
