var imei = require ('./scr/imei');

console.log(imei.isValid("860921035123120")); // returns true

console.log(imei.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(imei.random()); // returns string with random imei
