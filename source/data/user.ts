import { getDaysAgo } from '~source/core/getDate';
import User from '~source/types/user';

const user: User = {
    userName: 'IlseVG',
    userId: 1234,
    img: 'https://images.pexels.com/photos/5025079/pexels-photo-5025079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    progress: {
        dynamics: {
            easy: 190,
            medium: 40,
            hard: 0,
        },
        tempo: {
            easy: 20,
            medium: 40,
            hard: 0,
        },
        articulation: {
            easy: 160,
            medium: 40,
            hard: 0,
        },
        ornamentation: {
            easy: 140,
            medium: 40,
            hard: 0,
        },
        notes: {
            easy: 60,
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
        { date: '2022/05/24', score: 100 },
        { date: getDaysAgo(2), score: 58 },
        { date: getDaysAgo(1), score: 42 },
    ],
    badges: { 1: 1, 2: 2, 3: 2, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    quizzesDone: 24,
    friends: [4321, 5678, 5433, 1508, 6666],
    invites: {
        pending: [8642],
        outgoing: [9090],
    },
};

const emptyUser: User = {
    userName: 'Bart',
    userId: 8376,
    img: '',
    progress: {
        dynamics: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
        tempo: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
        articulation: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
        ornamentation: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
        notes: {
            easy: 0,
            medium: 0,
            hard: 0,
        },
    },
    streakDays: [],
    badges: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    quizzesDone: 0,
    friends: [],
    invites: {
        pending: [],
        outgoing: [],
    },
};

export { user, emptyUser };
