import { dataSets } from '~source/data/dataSets';
import { TopicDifficulty, Topics } from '~source/types/data';

const randomizeTopics = (
    topics: number[],
    difficulty: TopicDifficulty | 'none',
) => {
    const topicAmount = () => {
        if (difficulty === 'easy') return 5;
        if (difficulty === 'medium') return 7;
        if (difficulty === 'hard') return 10;
        return 10; // default for daily challenge
    };
    const shuffled = topics.sort(() => Math.random() - 0.5);
    const sliced = shuffled.slice(0, topicAmount());
    return sliced;
};

const getDailyTopics = (): number[] => {
    return [];
};

const getQuiztopics = ({
    topic,
    difficulty,
}: {
    topic: Topics | 'daily';
    difficulty: TopicDifficulty | 'none';
}): number[] => {
    if (topic === 'daily' || difficulty === 'none') return getDailyTopics();

    const topicData = dataSets[topic].levels[difficulty].topics;
    return topicData;
};

export { getDailyTopics, getQuiztopics, randomizeTopics };
