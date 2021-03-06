export type Topics =
    | 'dynamics'
    | 'tempo'
    | 'articulation'
    | 'ornamentation'
    | 'notes';
export type TopicDifficulty = 'easy' | 'medium' | 'hard';

export type Topic = {
    name: string;
    icon: string;
    iconType: 'icon' | 'text';
    is: string[];
    isNot: string[];
};

export type DataType = {
    [key: number]: Topic;
};

export type DataSetTopic = {
    desc: string;
    icon: string; // unicode JS source code or text
    iconType: 'icon' | 'text';
    levels: {
        [key in TopicDifficulty]: {
            topics: number[];
            expNeeded: number;
        };
    };
};
