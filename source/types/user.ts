import { TopicDifficulty, Topics } from './data';

export type StreakDay = {
    date: string;
    score: number;
};

type User = {
    userName: string;
    userId: number;
    img: string | null;
    progress: {
        [key in Topics]: {
            [key in TopicDifficulty]: number; //? { topicDifficulty: userXP }
        };
    };
    streakDays: StreakDay[];
    quizzesDone: number;
    badges: {
        [key: number]: number; //? { badgeId: user level number }
    };
    friends: number[];
    invites: {
        pending: number[];
        outgoing: number[];
    };
};

export default User;
