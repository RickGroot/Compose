export type BadgeLevel = {
    // number stands for badge level
    [key: number]: {
        desc: string;
        amountToComplete: number;
    };
};

export type Badge = {
    [key: number]: {
        badgeName: string;
        levels: BadgeLevel;
        icon: string;
    };
};
