const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) this.chain.push('( )');
    else this.chain.push('( '+ value +' )');
    return this;
  },
  removeLink(position) {
    if(typeof position != "number" || isNaN(position) ||
      position.toString().includes('.') ||
      position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let ch = this.chain.join('~~');
    this.chain = [];
    return ch;
  }
};

module.exports = chainMaker;
