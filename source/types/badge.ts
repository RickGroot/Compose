export type BadgeLevel = {
    // number stands for badge level
    [key: number]: {
        desc: string;
        amountToComplete: number;
    };
};

export type Badge = {
    badgeName: string;
    levels: BadgeLevel;
    icon: string;
};

export type Badges = {
    [key: number]: Badge;
};
