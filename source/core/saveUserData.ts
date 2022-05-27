import { TopicDifficulty, Topics } from '~source/types/data';
import { QuestionResult } from '~source/types/questions';
import User, { StreakDay } from '~source/types/user';
import { getDate } from './getDate';
import { getXp } from './getResults';

const saveDailyChallengeData = (results: QuestionResult[], user: User) => {
    const score = getXp(results);
    const date = getDate();
    const data: StreakDay = { date, score };

    if (user.streakDays.length < 1) {
        user.streakDays.push(data);
        return user;
    }

    const currentData = user.streakDays.find((e) => e?.date === date);

    if (currentData) {
        const isHigher = currentData.score < score;
        const index = user.streakDays.findIndex((e) => e?.date === date);
        isHigher && (user.streakDays[index].score = score);
        return user;
    } else {
        user.streakDays.push(data);
        return user;
    }
};

const getSaveTestData = (
    results: QuestionResult[],
    topic: Topics | 'daily',
    difficulty: TopicDifficulty | 'none',
    user: User,
) => {
    user.quizzesDone++;
    if (topic === 'daily') return saveDailyChallengeData(results, user);
    if (difficulty === 'none') return user;
    const score = getXp(results);
    user.progress[topic][difficulty] += score;
    return user;
};

export default getSaveTestData;
