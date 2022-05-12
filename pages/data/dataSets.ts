import { DataSetTopic } from '~source/types/data';

const dynamics: DataSetTopic = {
    desc: 'How quietly or loudly',
    icon: '\uD834\uDD91\uD834\uDD91',
    levels: {
        easy: [],
        medium: [],
        hard: [],
    },
};
const tempo: DataSetTopic = {
    desc: 'The rate of speed',
    icon: 'accel.',
    levels: {
        easy: [],
        medium: [],
        hard: [],
    },
};
const articulation: DataSetTopic = {
    desc: 'The style to play a note',
    icon: '\uD834\uDD7B \uD834\uDD7C',
    levels: {
        easy: [],
        medium: [],
        hard: [],
    },
};
const ornamentation: DataSetTopic = {
    desc: 'Make the melody more interesting',
    icon: 'tr',
    levels: {
        easy: [],
        medium: [],
        hard: [],
    },
};
const notes: DataSetTopic = {
    desc: 'How long to (not) play a note',
    icon: '\uD834\uDD61',
    levels: {
        easy: [],
        medium: [],
        hard: [],
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
