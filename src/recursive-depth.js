const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  	let n = 1;
  	let max = n;
    for(let el of arr) {
    	if(el instanceof Array) n = 1 + this.calculateDepth(el);
    	if(n>max) max=n;
    }
    return max;
  }
};