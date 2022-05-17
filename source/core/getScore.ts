import { Friend } from '~source/types/friend';
import User, { StreakDay } from '~source/types/user';
import { getDate } from './getDate';

const getTodayScore = (user: Friend | User): StreakDay => {
    const today = getDate();
    const dayScore = user.streakDays.find((e) => e?.date === today);
    return dayScore;
};

export default getTodayScore;
