var codes = require('../TAC/codes')
function SN() {
    return Math.floor(Math.random() * (900000 - 100000)) + 100000;
}

function upTo(digit){
    while (Number.isInteger(digit/10) == false) digit++;
    return digit;
}


function Luhn(line) {
    var summEven=0;
    var even=[];
    var summOdd =0;
    for(var i = 1; i< line.length;i=i+2){
        even.push(Number(line[i])*2);
        summOdd = summOdd + Number(line[i-1]);
        if(i==13) {
            break;
        }
    }
    for(var y = 0;y<even.length;y++){
        if(Number(even[y])/10<1) {
            summEven = summEven + Number(even[y]);
        }else
        {
            var st = Number(even[y].toString().charAt(0));
            var nd = Number(even[y].toString().charAt(1))
            summEven = summEven + st+nd;
        }


        
    }
    var Luhndigit = summEven+summOdd;
    Luhndigit = upTo(Luhndigit) - Luhndigit;
return Luhndigit;
}

function GetRandom(device){
    var randImei;
    var objLength = Object.keys(codes).length;
    var keys = Object.keys(codes)
    var randDevice = codes[keys[ keys.length * Math.random() << 0]];
    var SNs = Object.keys(randDevice);
    var randCode = randDevice[SNs[ SNs.length * Math.random() << 0]];
    if(typeof randCode!= "object") {
        randImei = randCode + SN();
        randImei = randImei.toString() + Luhn(randImei).toString();
        return randImei;
    }else
    {
        var deeper = Object.keys(randCode);
        randCode = randCode[deeper[ deeper.length * Math.random() << 0]];
        randImei = randImei.toString() + Luhn(randImei).toString();
        return randImei;
    }

}




function ByDevice(device,model) {
    var code = codes[device][model];
    var randImei;
if (typeof code == "object"){
    var objLength = Object.keys(code).length;
    var keys = Object.keys(code)
    code = code[keys[ keys.length * Math.random() << 0]];
    randImei = code + SN();
    randImei = randImei.toString() + Luhn(randImei).toString();
    return randImei;
}else {
    randImei = code + SN();
    randImei = randImei.toString() + Luhn(randImei).toString();
    return randImei;
}
}



function checkDigit(str) {
var LastDigit = str.toString();
var line = str.toString().slice(0,14);
LastDigit = LastDigit.charAt(LastDigit.length-1);
var LuhnDigit = Luhn(line);
if (LuhnDigit == LastDigit) return true;
else return false;
}




var imei = function () {
    this.random = GetRandom;
    this.device = ByDevice;
    this.isValid = checkDigit;
}

module.exports = imei;