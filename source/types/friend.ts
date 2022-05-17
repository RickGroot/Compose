import { StreakDay } from './user';

export type Friend = {
    userName: string;
    userId: number;
    img: string | null;
    streakDays: StreakDay[];
};

export type Friends = {
    [key: number]: Friend;
};
