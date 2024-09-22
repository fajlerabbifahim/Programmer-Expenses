const getInputValueById = function (id) {
  const inputValue = document.getElementById(id).value;
  const getInput = parseFloat(inputValue);
  return getInput;
};
