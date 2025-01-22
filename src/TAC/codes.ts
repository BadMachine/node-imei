export type ITAC = {
    Apple: {
        unknown: string,
        iPhone: string,
        iPhone3G: {
            MB496RS: string,
            MB704LL: string,
            MB496B: string,
            A1241: string
        },
        iPhone3GS: {
            MC131B: string,
        },
        iPhone4: {
            MC608LL: string,
            MC603B: string,
            MC610LL: string,
            MC603KS: string,
            "MC610LL/A": string,
            "MD198HN/A": string,
        },
        iPhone4S: {
            MD260C: string,
        },
        iPhone5: {
            MD642C: string,
        },
        iPhone5S: {
            "ME297C/A": string,
            A1533: string[];
            A1453: string[];
        },
        iPhone5C: {
            A1507: string[];
            A1456: string[];
        },
        iPhone6: {
            A1549: string;
        },
        "iPhone6+": {
            A1522: string;
        },
        iPhone8: {
            A1905: string;
        },
    };
    Samsung: {
        SMT5613474: string,
        GalaxyS3: string
    }
    HTC: {
        WildFire: string
    };
    Nokia: {
        N9: string;
        N9_2: string;
        N9_3: string;
        N1320: string;
        N1320_2: string;
    };
    [key: string]: Record<string, string | Record<string, string | string[]>>; // Index signature for additional brands
}

const codes: ITAC = {
    Apple: {
        unknown: "01124500",
        iPhone: "01154600",
        iPhone3G: {
            MB496RS: "01174400",
            MB704LL: "01180800",
            MB496B: "01181200",
            A1241: "01193400"
        },
        iPhone3GS: {
            MC131B: "01215900",
        },
        iPhone4: {
            MC608LL: "01233600",
            MC603B: "01233700",
            MC610LL: "01233800",
            MC603KS: "01243000",
            "MC610LL/A": "01253600",
            "MD198HN/A": "01326300",
        },
        iPhone4S: {
            MD260C: "01300600",
        },
        iPhone5: {
            MD642C: "01332700",
        },
        iPhone5S: {
            "ME297C/A": "01388300",
            A1533: ["35875105", "35875305", "35875405", "35875505"],
            A1453: ["35875605", "35875705", "35875805", "35875905", "35876005"],
        },
        iPhone5C: {
            A1507: ["35880005", "35880105", "35880205", "35880305", "35880405"],
            A1456: ["35881505", "35881605", "35881705", "35881805", "35881905"],
        },
        iPhone6: {
            A1549: "35925406",
        },
        "iPhone6+": {
            A1522: "35438506",
        },
        iPhone8: {
            A1905: "35299209",
        },
    },
    Samsung: {
        SMT5613474: "35951406",
        GalaxyS3: "35226005"
    },
    HTC: {
        WildFire: "35902803"
    },
    Nokia: {
        N9: "35166905",
        N9_2: "35792304",
        N9_3: "35929404",
        N1320: "35173506",
        N1320_2: "35173606"
    }
};

export default codes;
