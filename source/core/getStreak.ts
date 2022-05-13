import User from '~source/types/user';
import { getDateType } from './getDate';

const getLongestStreak = (userData: User) => {
    const streakArray = userData.streakDays.map(
        (day) => day && getDateType(day.date),
    );
    console.log(streakArray);
};

const getCurrentStreak = () => {};

export { getCurrentStreak, getLongestStreak };
