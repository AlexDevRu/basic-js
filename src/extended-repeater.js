const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes=0, separator='+', addition, additionRepeatTimes=0, additionSeparator='|' } = options;

  let part = ''+str;
  if(additionRepeatTimes) {
  	let additionPart = [];
  	for(let i = 0; i < additionRepeatTimes; i++)
  		additionPart.push(''+addition);
  	part += additionPart.join(additionSeparator);
  } else if(addition) 
  	part += addition;

  if(repeatTimes) {
  	let main = [];
  	for(let i = 0; i < repeatTimes; i++)
  		main.push(part);
  	return main.join(separator);
  }
  return part;
};
  