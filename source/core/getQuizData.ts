import { dataSets } from '~source/data/dataSets';
import { getDate, getDateType } from './getDate';
import data from '../data/data';
import { TopicDifficulty, Topics } from '~source/types/data';

const dailyHash = (s: string) =>
    Array.from(s).reduce(
        (hash, char) => 0 | (31 * hash + char.charCodeAt(0)),
        0,
    );

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
    const maxNumber = Object.keys(data).length;
    const today = getDate();
    const hash = dailyHash(today) * 1;
    const hashArray = hash.toString().match(/.{1,2}/g) || [0];
    const numberArray = hashArray.map((item) => {
        if (typeof item === 'number') return item;
        else return parseInt(item);
    });
    const ids = numberArray.map((id) => {
        let reducedId = id;
        while (reducedId > maxNumber) {
            reducedId = Math.round(reducedId / 2);
        }
        return reducedId;
    });

    return ids;
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
