var imei = require ('./scr/imei');

var IMEI= new imei;
console.log(IMEI.isValid("860921035123120")); // returns true

console.log(IMEI.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(IMEI.random()); // returns string with random imei
