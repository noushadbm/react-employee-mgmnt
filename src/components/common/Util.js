const getNameForValue = (value, array) => {
  if (array) {
    const found = array.find(function (element, idx) {
      return element["value"] === value;
    });

    return found["name"];
  }
};

export { getNameForValue };
