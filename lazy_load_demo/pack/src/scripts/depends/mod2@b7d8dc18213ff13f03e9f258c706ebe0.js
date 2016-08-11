require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"src/scripts/depends/mod2.js":[function(require,module,exports){
"use strict";
var mod3 = require("./mod3.js");
var mod = {
  name : "mod2", 
  print : function() {
    mod3.print();
  }
}

module.exports = mod;



},{"./mod3.js":"src/scripts/depends/mod3.js"}],"src/scripts/depends/mod3.js":[function(require,module,exports){
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

},{"./mod5.js":"src/scripts/depends/mod5.js","./mod6.js":"src/scripts/depends/mod6.js"}],"src/scripts/depends/mod6.js":[function(require,module,exports){


var mod6 = {
  name : "mod6" ,
  age  : 12 
}

module.exports = mod6;

},{}]},{},["src/scripts/depends/mod2.js"]);
