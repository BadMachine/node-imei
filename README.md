# node-imei
## Description
imei generator/checker (via Luhn algorithm)

## Installation
    $ npm install node-imei
    
## Usage
``` javascript
var imei = require('node-imei');

var IMEI= new imei;
console.log(IMEI.random()); // returns string with random imei

console.log(IMEI.device("Apple","iPhone3G")); // returns string with imei by device TAC

console.log(IMEI.isValid("860921035123120")); // returns true
```

### random()
Returns a string with valid imei. Script makes string with 3 parts:
1st part is TAC (Type Allocation Code)
2nd part is random value from 100000 to 999999
3rd part is last digit(Luhn digit)

### isValid(imei)
Returns a boolean value.

