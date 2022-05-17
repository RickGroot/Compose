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
        { date: '2022/05/01', score: 100 },
        { date: '2022/05/02', score: 100 },
        { date: '2022/05/04', score: 100 },
        { date: '2022/05/05', score: 100 },
        { date: '2022/05/06', score: 100 },
        { date: '2022/05/07', score: 100 },
        { date: '2022/05/08', score: 100 },
        { date: '2022/05/11', score: 100 },
        { date: '2022/05/15', score: 100 },
        { date: '2022/05/16', score: 100 },
        { date: '2022/05/17', score: 500 },
    ],
    badges: {},
    friends: [4321, 5678, 5433],
};

export default user;
