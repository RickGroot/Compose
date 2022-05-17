import { StreakDay } from './user';

export type Friend = {
    userName: string;
    userId: number;
    streakDays: StreakDay[];
};

export type Friends = {
    [key: number]: Friend;
};
