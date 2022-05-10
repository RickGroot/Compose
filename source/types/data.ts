export type TopicDifficulty = 'easy' | 'medium' | 'hard';

export type Topic = {
    name: string;
    is: string[];
    isNot: string[];
};

export type DataType = {
    [key: number]: Topic;
};

export type DataSetTopic = {
    [key in TopicDifficulty]: number[];
};
