var mod5 = require("./mod5.js");

var mod = {
  name : "mod4",
  age : 1000,
  print : function () {
    console.log( mod5.age + this.age);
  }
}

module.exports = mod;
