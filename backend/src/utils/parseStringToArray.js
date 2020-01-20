module.exports = {
  parseStringAsArray(valueString = "", typeSplit = ",") {
    return valueString.split(typeSplit).map(str => str.trim());
  }
};
