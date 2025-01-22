import codes, { type ITAC } from "./TAC/codes";

const IMEI_LENGTH = 15;

function isObject(o: unknown): o is Object {
    return o !== null && typeof o === 'object' && Array.isArray(o) === false;
}

function getRandSerial() {
    return (Math.floor(Math.random() * (999999 - 100000)) + 100000).toString();
}

/*
   9 < value < 19
*/
const getSplitSum = (value: number) => {
    return String(value).split("").reduce((acc, item) => {
        acc+= +item;
        return acc;
    }, 0);
}

const getLuhnSum = (value: string): number => {
    let resultSum = 0;

    // Multiply every % 2 from the tail by 2
    for (let it = value.length - 1; it >= 0; it--) {
        let resultNum: number;

        if ((value.length - it) % 2 === 0) {
            const multiplied = +value[it] * 2;
            resultNum = multiplied > 9 ? getSplitSum(multiplied) : multiplied;
        } else {
            resultNum = +value[it];
        }

        resultSum += resultNum;
    }

    return resultSum;
}

const validateSum = (value: number) => value % 10 === 0;

const completeLuhnString = (line: string): string => {
    const lineToProcess = `${line}0`;

    const sum = getLuhnSum(lineToProcess);
    const isValid = validateSum(sum);

    if (isValid) {
        return lineToProcess;
    } else {
        const tail = Math.ceil(sum / 10) * 10 - sum;

        return lineToProcess.slice(0, -1) + tail;
    }
}

const isValid = (value: string) => {
    if (!value) return false;
    if (value.length !== IMEI_LENGTH) return false;
    if (isNaN(+value)) return false;

    try {
        return validateSum(getLuhnSum(value));
    } catch {
        return false;
    }
}

/*
    @Param {string} [serial = getRandSerial()] - Specified / Random serial number
*/

const getRandom = (serial: string = getRandSerial()): string => {
    const brands = Object.keys(codes);

    const randomBrandKey = brands[Math.floor(Math.random() * brands.length)];
    const randomDevice = codes[randomBrandKey];

    const modelKeys = Object.keys(randomDevice);
    const randomModelKey = modelKeys[Math.floor(Math.random() * modelKeys.length)];
    const randomDeviceModel = randomDevice[randomModelKey];

    let modelSN: string = '';

    if (typeof randomDeviceModel == 'string') {
        modelSN = randomDeviceModel;
    } else if (isObject(randomDeviceModel)) {
        const keys = Object.keys(randomDeviceModel);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];

        const randomModel = randomDeviceModel[randomKey];

        if (Array.isArray(randomModel)) {
            modelSN = randomModel[Math.floor(Math.random() * randomModel.length)]
        } else {
            modelSN = randomModel;
        }
    }

    let randImei = modelSN + serial;

    return completeLuhnString(randImei);
}

type ModelForDevice<Device extends keyof ITAC> = keyof ITAC[Device];

const getImeiByDevice = <
  Device extends keyof ITAC,
  Model extends ModelForDevice<Device>
>(device: Device, model?: Model) => {
    const devices = codes[device];

    let code = model ? devices[model] : devices[Object.keys(devices)[Math.floor(Math.random() * Object.keys(devices).length)]];

    if (isObject(code)) {

        const keys = Object.keys(code) as (keyof typeof code)[];
        const randomKey = keys[Math.floor(Math.random() * keys.length)] as (keyof typeof code);

        const randomDevice = code[randomKey];
        if (Array.isArray(randomDevice)) {
            const _randDeviceFromArray: string = randomDevice[Math.floor(Math.random() * randomDevice.length)];

            return completeLuhnString(_randDeviceFromArray + getRandSerial())
        } else {
            return completeLuhnString(randomDevice as string + getRandSerial());
        }
    }

    return completeLuhnString(code + getRandSerial());
}

export {
    getRandom,
    getImeiByDevice,
    isValid,
};
