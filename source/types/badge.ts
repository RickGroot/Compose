export type BadgeDifficulty = 1 | 2 | 3;

export type BadgeLevel = {
    [key in BadgeDifficulty]: {
        desc: string;
        completeIf: any;
    };
};

export type Badge = {
    [key: number]: {
        levels: BadgeLevel;
        icon: string;
    };
};
