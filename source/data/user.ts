import User from '~source/types/user';

const user: User = {
    userName: 'RickG',
    userId: 1234,
    img: 'https://avatars.githubusercontent.com/u/58476652?v=4',
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
        { date: '2022/05/17', score: 100 },
        { date: '2022/05/18', score: 100 },
        { date: '2022/05/19', score: 500 },
        { date: '2022/05/20', score: 500 },
        { date: '2022/05/21', score: 100 },
        { date: '2022/05/22', score: 100 },
        { date: '2022/05/23', score: 100 },
    ],
    badges: { 1: 2, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    friends: [4321, 5678, 5433],
    invites: {
        pending: [8888],
        outgoing: null,
    },
};

export default user;
