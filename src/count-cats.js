const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for(let arr of matrix)
  	for(let j of arr)
  		if(j == '^^') ++cats;
  return cats;
};
