import { TopicDifficulty, Topics } from './data';

export type StreakDay =
    | {
          date: string;
          score: number;
      }
    | undefined;

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
    badges: {
        // badgeId
        [key: number]: {
            currentLevel: number | undefined;
            progress: number;
        };
    }[];
    friends: number[];
    invites: {
        pending: number[] | null;
        outgoing: number[] | null;
    };
};

export default User;
