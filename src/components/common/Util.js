const getNameForValue = (value, array) => {
  if (array) {
    const found = array.find(function (element, idx) {
      return element["value"] === value;
    });

    return found ? found["name"] : "";
  }
};

const getFormatedDate = (date) => {
  const dateNumber = date.getDate();
  const monthNumber = date.getMonth() + 1;
  return `${dateNumber < 10 ? "0" + dateNumber : dateNumber}-${
    monthNumber < 10 ? "0" + monthNumber : monthNumber
  }-${date.getFullYear()}`;
};

export { getNameForValue, getFormatedDate };
