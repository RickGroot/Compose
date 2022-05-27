import user from '~source/data/user';
import { TopicDifficulty, Topics } from '~source/types/data';
import { QuestionResult } from '~source/types/questions';
import { StreakDay } from '~source/types/user';
import { getDate } from './getDate';
import { getXp } from './getResults';

const saveDailyChallengeData = (results: QuestionResult[]) => {
    const score = getXp(results);
    const date = getDate();
    const data: StreakDay = { date, score };
    const currentData = user.streakDays.find((e) => e?.date === date);

    if (currentData) {
        currentData.score < score && console.log('push higher score');
    } else console.log('push score to user');
};

const saveTestData = (
    results: QuestionResult[],
    topic: Topics | 'daily',
    difficulty: TopicDifficulty | 'none',
) => {
    if (topic === 'daily') return saveDailyChallengeData(results);
};

export default saveTestData;
