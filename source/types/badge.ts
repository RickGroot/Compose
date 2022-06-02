export type BadgeName =
    | 'Challenger'
    | 'Friends'
    | 'Quizmaster'
    | 'Dynamics'
    | 'Tempo'
    | 'Articulation'
    | 'Ornamentation'
    | 'Notes';

export type BadgeProgress = {
    id: number;
    needed: number;
    currentLevel: number;
    progress: number;
};

export type BadgeLevel = {
    // number stands for badge level
    [key: number]: {
        desc: string;
        amountToComplete: number;
    };
};

export type Badge = {
    badgeName: BadgeName;
    topic: boolean;
    levels: BadgeLevel;
    icon: string;
    iconType: 'icon' | 'text' | 'svg';
};

export type Badges = {
    [key: number]: Badge;
};
