import User from '~source/types/user';

const user: User = {
    userName: 'RickG',
    userId: 1234,
    progress: {
        dynamics: {
            easy: 100,
            medium: 40,
            hard: 0,
        },
        tempo: {
            easy: 100,
            medium: 40,
            hard: 0,
        },
        articulation: {
            easy: 100,
            medium: 40,
            hard: 0,
        },
        ornamentation: {
            easy: 100,
            medium: 40,
            hard: 0,
        },
        notes: {
            easy: 100,
            medium: 40,
            hard: 0,
        },
    },
    streakDays: [
        { date: '2022/05/13', score: 100 },
        { date: '2022/05/12', score: 100 },
        { date: '2022/05/11', score: 100 },
    ],
    badges: {},
};

export default user;
