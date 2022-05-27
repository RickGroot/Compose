import { Friend } from '~source/types/friend';
import User, { StreakDay } from '~source/types/user';
import { getDate } from './getDate';

const getTodayScore = (user: Friend | User): StreakDay => {
    const today = getDate();
    const dayScore =
        user.streakDays && user.streakDays.find((e) => e?.date === today);
    return dayScore || { date: today, score: 0 };
};

export default getTodayScore;
