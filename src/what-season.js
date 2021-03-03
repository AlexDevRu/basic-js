const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(date === undefined) return 'Unable to determine the time of year!';
	if(!(date instanceof Date) || date.toString().split(' ')[3] != date.getFullYear()) throw new Error();
	let m = date.getMonth();
    switch(true) {
    	case m==0 || m==1 || m==11:
    		return "winter";
    		break;
    	case m>1 && m<5:
    		return "spring";
    		break;
    	case m>4 && m<8:
    		return "summer";
    		break;
    	default:
    		return "autumn";
    }
};
