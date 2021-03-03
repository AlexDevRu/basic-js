const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
  	this.isDirect = type || type==undefined ? true : false;
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let crypted = '';
    for(let i = 0, j = 0 ; i < message.length; i++) {
    	if(j == key.length) j = 0;
    	let m = message.charCodeAt(i) - 65;
    	if(m < 0 || m > 25) {
    		crypted += message[i];
    		continue;
    	}
    	let k = key.charCodeAt(j) - 65;
    	let letterCode = (m+k)%26 + 65;
    	crypted += String.fromCharCode(letterCode);
    	++j;
    }
    return this.isDirect ? crypted : crypted.split('').reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw new Error();
    key = key.toUpperCase();
    let decrypted = '';
    for(let i = 0, j = 0 ; i < encryptedMessage.length; i++) {
    	if(j == key.length) j = 0;
    	let m = encryptedMessage.charCodeAt(i) - 65;
    	if(m < 0 || m > 25) {
    		decrypted += encryptedMessage[i];
    		continue;
    	}
    	let k = key.charCodeAt(j) - 65;
    	let letterCode = (26 - k + m)%26 + 65;
    	decrypted += String.fromCharCode(letterCode);
    	++j;
    }
    return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
