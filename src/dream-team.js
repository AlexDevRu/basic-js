const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(!(members instanceof Array)) return false;
  return members.map(m => typeof m === "string" ? m.trim()[0].toUpperCase() : '').sort().join('');
};
