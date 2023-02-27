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

// Convert dd-MM-yyyy to yyyy-MM-dd
const convertDateToISO = (dateString) => {
  if (dateString) {
    const arr = dateString.split("-");
    let tmp = arr[2];
    arr[2] = arr[0];
    arr[0] = tmp;

    return `${arr[0]}-${arr[1]}-${arr[2]}`;
  }
  return dateString;
};

export { getNameForValue, getFormatedDate, convertDateToISO };
