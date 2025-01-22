type ITAC = {
    Apple: {
        unknown: string;
        iPhone: string;
        iPhone3G: {
            MB496RS: string;
            MB704LL: string;
            MB496B: string;
            A1241: string;
        };
        iPhone3GS: {
            MC131B: string;
        };
        iPhone4: {
            MC608LL: string;
            MC603B: string;
            MC610LL: string;
            MC603KS: string;
            "MC610LL/A": string;
            "MD198HN/A": string;
        };
        iPhone4S: {
            MD260C: string;
        };
        iPhone5: {
            MD642C: string;
        };
        iPhone5S: {
            "ME297C/A": string;
            A1533: string[];
            A1453: string[];
        };
        iPhone5C: {
            A1507: string[];
            A1456: string[];
        };
        iPhone6: {
            A1549: string;
        };
        "iPhone6+": {
            A1522: string;
        };
        iPhone8: {
            A1905: string;
        };
    };
    Samsung: {
        SMT5613474: string;
        GalaxyS3: string;
    };
    HTC: {
        WildFire: string;
    };
    Nokia: {
        N9: string;
        N9_2: string;
        N9_3: string;
        N1320: string;
        N1320_2: string;
    };
    [key: string]: Record<string, string | Record<string, string | string[]>>;
};

declare const isValid: (value: string) => boolean;
declare const getRandom: (serial?: string) => string;
type ModelForDevice<Device extends keyof ITAC> = keyof ITAC[Device];
declare const getImeiByDevice: <Device extends keyof ITAC, Model extends ModelForDevice<Device>>(device: Device, model?: Model) => string;

export { getImeiByDevice, getRandom, isValid };
