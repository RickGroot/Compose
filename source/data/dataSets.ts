import { DataSetTopic } from '~source/types/data';

const dynamics: DataSetTopic = {
    desc: 'How quietly or loudly',
    icon: '\uD834\uDD91\uD834\uDD91',
    iconType: 'icon',
    levels: {
        easy: { topics: [1, 2, 3, 4, 5, 6], expNeeded: 350 },
        medium: {
            topics: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
            expNeeded: 450,
        },
        hard: { topics: [9, 10, 11, 12, 13, 14, 15, 16, 17], expNeeded: 600 },
    },
};
const tempo: DataSetTopic = {
    desc: 'The rate of speed',
    icon: 'accel.',
    iconType: 'text',
    levels: {
        easy: { topics: [18, 19, 20, 21, 22, 23, 24], expNeeded: 350 },
        medium: { topics: [22, 23, 24, 25, 26, 27, 28], expNeeded: 450 },
        hard: { topics: [27, 28, 19, 29, 30, 31, 32], expNeeded: 600 },
    },
};
const articulation: DataSetTopic = {
    desc: 'The style to play a note',
    icon: '\uD834\uDD81',
    iconType: 'icon',
    levels: {
        easy: { topics: [1], expNeeded: 350 },
        medium: { topics: [1], expNeeded: 450 },
        hard: { topics: [1], expNeeded: 600 },
    },
};
const ornamentation: DataSetTopic = {
    desc: 'Make the melody more interesting',
    icon: 'tr.',
    iconType: 'text',
    levels: {
        easy: { topics: [1], expNeeded: 350 },
        medium: { topics: [1], expNeeded: 450 },
        hard: { topics: [1], expNeeded: 600 },
    },
};
const notes: DataSetTopic = {
    desc: 'How long to (not) play a note',
    icon: '\uD834\uDD61',
    iconType: 'icon',
    levels: {
        easy: { topics: [1], expNeeded: 350 },
        medium: { topics: [1], expNeeded: 450 },
        hard: { topics: [1], expNeeded: 600 },
    },
};

const dataSets: { [key: string]: DataSetTopic } = {
    dynamics,
    tempo,
    articulation,
    ornamentation,
    notes,
};

export { dataSets };
