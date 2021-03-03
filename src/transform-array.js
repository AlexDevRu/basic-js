const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)) throw new Error();

  let newArr = [];
  let forDelete = [];

  let i = 0;
  while(i < arr.length) {
	switch(arr[i]) {
  		case '--double-next':
  			if(i != arr.length - 1) newArr.push(arr[i+1]);
  			++i;
  			break;
  		case '--double-prev':
  			if(i != 0 && newArr[newArr.length - 1] != 'del') newArr.push(arr[i-1]);
  			++i;
  			break;
  		case '--discard-next':
  			newArr.push('del');
  			i += 2;
  			break;
  		case '--discard-prev':
  			if(newArr[newArr.length - 1] != 'del') newArr.pop();
  			++i;
  			break;
  		default:
  			newArr.push(arr[i++]);
  	}
  }

  return newArr.filter(n => n!='del');
};
