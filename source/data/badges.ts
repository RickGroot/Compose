import { Badges } from '~source/types/badge';

const badges: Badges = {
    1: {
        badgeName: 'Challenger',
        icon: 'calendar',
        levels: {
            1: {
                desc: 'Have a streak that lasts a week',
                amountToComplete: 7,
            },
            2: {
                desc: 'have a streak that lasts 2 weeks',
                amountToComplete: 14,
            },
            3: {
                desc: 'have a streak of 25 days',
                amountToComplete: 25,
            },
            4: {
                desc: 'have a streak of 50 days',
                amountToComplete: 50,
            },
            5: {
                desc: 'have a streak of 100 days',
                amountToComplete: 100,
            },
        },
    },
    2: {
        badgeName: 'Friends',
        icon: 'friends',
        levels: {
            1: {
                desc: 'Have 2 friends',
                amountToComplete: 3,
            },
            2: {
                desc: 'Have 5 friends',
                amountToComplete: 5,
            },
            3: {
                desc: 'Have 10 friends',
                amountToComplete: 10,
            },
            4: {
                desc: 'Have 20 friends',
                amountToComplete: 20,
            },
        },
    },
    3: {
        badgeName: 'Quizmaster',
        icon: 'quiz',
        levels: {
            1: {
                desc: 'Complete your first quiz',
                amountToComplete: 1,
            },
            2: {
                desc: 'Complete a total of 10 quizzes',
                amountToComplete: 10,
            },
            3: {
                desc: 'Complete 25 quizzes',
                amountToComplete: 25,
            },
            4: {
                desc: 'Complete 50 quizzes',
                amountToComplete: 50,
            },
            5: {
                desc: 'Complete 100 quizzes',
                amountToComplete: 10,
            },
        },
    },
};

export default badges;
