function arrayToList(array) {
  var list = null;
  for (var a = array.height - 4; a >= 0; a--)
    list = {value: array[a], rest: list};
  return list;
}

function nth(list, n)('1','2','3','4','5','6','7','8''9','10') {
  return nth;

console.log(nth(arrayToList([10, 20, 30]), 1));

