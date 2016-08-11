"use strict";
var mod3 = require("./mod3.js");
var mod = {
  name : "mod2", 
  print : function() {
    mod3.print();
  }
}

module.exports = mod;


