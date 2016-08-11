var mod5 = require("./mod5.js");
var mod6 = require("./mod6.js");

var mod = {
  name : "mod3",
  age : 1500,
  print : function () {
    console.log( mod5.age + mod6.age);
  }
}

module.exports = mod;
