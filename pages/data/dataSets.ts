import { DataSetTopic } from '~source/types/data';

const dynamics: DataSetTopic = {
    desc: 'How quietly or loudly',
    icon: '\uD834\uDD91\uD834\uDD91',
    levels: {
        easy: { topics: [], expNeeded: 200 },
        medium: { topics: [], expNeeded: 200 },
        hard: { topics: [], expNeeded: 200 },
    },
};
const tempo: DataSetTopic = {
    desc: 'The rate of speed',
    icon: 'accel.',
    levels: {
        easy: { topics: [], expNeeded: 200 },
        medium: { topics: [], expNeeded: 200 },
        hard: { topics: [], expNeeded: 200 },
    },
};
const articulation: DataSetTopic = {
    desc: 'The style to play a note',
    icon: '\uD834\uDD7B \uD834\uDD7C',
    levels: {
        easy: { topics: [], expNeeded: 200 },
        medium: { topics: [], expNeeded: 200 },
        hard: { topics: [], expNeeded: 200 },
    },
};
const ornamentation: DataSetTopic = {
    desc: 'Make the melody more interesting',
    icon: 'tr',
    levels: {
        easy: { topics: [], expNeeded: 200 },
        medium: { topics: [], expNeeded: 200 },
        hard: { topics: [], expNeeded: 200 },
    },
};
const notes: DataSetTopic = {
    desc: 'How long to (not) play a note',
    icon: '\uD834\uDD61',
    levels: {
        easy: { topics: [], expNeeded: 200 },
        medium: { topics: [], expNeeded: 200 },
        hard: { topics: [], expNeeded: 200 },
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
