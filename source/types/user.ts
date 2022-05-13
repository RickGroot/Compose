import { TopicDifficulty, Topics } from './data';

type StreakDay =
    | {
          date: string;
          score: number;
      }
    | undefined;

type User = {
    userName: string;
    userId: number;
    progress: {
        [key in Topics]: {
            [key in TopicDifficulty]: number; //? { topicDifficulty: userXP }
        };
    };
    streakDays: StreakDay[];
    badges: {
        [key: number]: number | undefined; //? { badgeId: levelNumber }
    };
};

export default User;
