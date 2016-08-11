"use strict";
var mod4 = require("./mod4.js");

var mod = {
   name : "mod1",
   print : function() {
     mod4.print();
   }
}

module.exports = mod;
