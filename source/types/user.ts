import { TopicDifficulty, Topics } from './data';

type User = {
    userName: string;
    userId: number;
    progress: {
        [key in Topics]: {
            [key in TopicDifficulty]: number; //? { topicDifficulty: userXP }
        };
    };
    streakDays: number[];
    badges: {
        [key: number]: number | undefined; //? { badgeId: levelNumber }
    };
};

export default User;
