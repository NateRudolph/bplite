(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var two_1 = require("./two");
var Thing1 = (function () {
    function Thing1() {
        this.name = two_1.default;
    }
    return Thing1;
}());
;
var test = "\nmulti line\nstring comin\natcha\n";
var materials = [
    "thing1",
    "blah",
    "differendddddddddddtlong thing",
    "1"
];
var lengths = materials.map(function (material) { return material.length; });
console.log("Does this work??? " + test);
console.log(lengths);

},{"./two":2}],2:[function(require,module,exports){
"use strict";
var Thing2 = (function () {
    function Thing2() {
    }
    return Thing2;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Thing2;
;

},{}]},{},[1]);
