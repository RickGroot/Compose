import { Badges } from '~source/types/badge';
import { dataSets } from './dataSets';

const badges: Badges = {
    1: {
        badgeName: 'Challenger',
        topic: false,
        icon: 'calendar',
        iconType: 'svg',
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
        topic: false,
        icon: 'friends',
        iconType: 'svg',
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
        topic: false,
        icon: 'quiz',
        iconType: 'svg',
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
    4: {
        badgeName: 'Dynamics',
        topic: true,
        icon: '\uD834\uDD91\uD834\uDD91',
        iconType: 'icon',
        levels: {
            1: {
                desc: 'Complete easy difficulty on dynamics',
                amountToComplete: dataSets.dynamics.levels.easy.expNeeded,
            },
            2: {
                desc: 'Complete medium difficulty on dynamics',
                amountToComplete: dataSets.dynamics.levels.medium.expNeeded,
            },
            3: {
                desc: 'Complete all difficulties on dynamics',
                amountToComplete: dataSets.dynamics.levels.hard.expNeeded,
            },
        },
    },
    5: {
        badgeName: 'Tempo',
        topic: true,
        icon: 'accel.',
        iconType: 'text',
        levels: {
            1: {
                desc: 'Complete easy difficulty on tempo',
                amountToComplete: dataSets.tempo.levels.easy.expNeeded,
            },
            2: {
                desc: 'Complete medium difficulty on tempo',
                amountToComplete: dataSets.tempo.levels.medium.expNeeded,
            },
            3: {
                desc: 'Complete all difficulties on tempo',
                amountToComplete: dataSets.tempo.levels.hard.expNeeded,
            },
        },
    },
    6: {
        badgeName: 'Articulation',
        topic: true,
        icon: '>',
        iconType: 'text',
        levels: {
            1: {
                desc: 'Complete easy difficulty on articulation',
                amountToComplete: dataSets.articulation.levels.easy.expNeeded,
            },
            2: {
                desc: 'Complete medium difficulty on articulation',
                amountToComplete: dataSets.articulation.levels.medium.expNeeded,
            },
            3: {
                desc: 'Complete all difficulties on articulation',
                amountToComplete: dataSets.articulation.levels.hard.expNeeded,
            },
        },
    },
    7: {
        badgeName: 'Ornamentation',
        topic: true,
        icon: 'tr.',
        iconType: 'text',
        levels: {
            1: {
                desc: 'Complete easy difficulty on ornamentation',
                amountToComplete: dataSets.ornamentation.levels.easy.expNeeded,
            },
            2: {
                desc: 'Complete medium difficulty on ornamentation',
                amountToComplete:
                    dataSets.ornamentation.levels.medium.expNeeded,
            },
            3: {
                desc: 'Complete all difficulties on ornamentation',
                amountToComplete: dataSets.ornamentation.levels.hard.expNeeded,
            },
        },
    },
    8: {
        badgeName: 'Notes',
        topic: true,
        icon: '\uD834\uDD61',
        iconType: 'icon',
        levels: {
            1: {
                desc: 'Complete easy difficulty on notes',
                amountToComplete: dataSets.notes.levels.easy.expNeeded,
            },
            2: {
                desc: 'Complete medium difficulty on notes',
                amountToComplete: dataSets.notes.levels.medium.expNeeded,
            },
            3: {
                desc: 'Complete all difficulties on notes',
                amountToComplete: dataSets.notes.levels.hard.expNeeded,
            },
        },
    },
};

export default badges;
