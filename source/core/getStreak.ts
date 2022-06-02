import { Friend } from '~source/types/friend';
import User from '~source/types/user';
import { getDate, getDateType } from './getDate';

const oneDay = 1000 * 60 * 60 * 24; // day in miliseconds
const today = getDate();

const getLongestStreak = (userData: User | Friend) => {
    let successive: boolean[] = [];

    const streakArray = userData.streakDays.map(
        (day) => day && getDateType(day.date),
    );

    if (streakArray.length < 1) return 0;
    // function will push true or false to an array when it is a consecutive day
    streakArray.reverse().reduce((previousValue, currentValue) => {
        if (!currentValue || !previousValue) successive.push(false);
        else if (previousValue.getTime() - currentValue.getTime() <= oneDay)
            successive.push(true);
        else successive.push(false);

        return currentValue;
    });

    // function will count highest amount of true values in array
    const highestCount = () => {
        const arr = successive;
        let c = 0;
        let max = 0;

        arr.forEach((e) => {
            e == true ? c++ : (c = 0);
            if (c > max) max = c;
        });

        return max + 1;
    };

    return highestCount();
};

const getCurrentStreak = (userData: User | Friend) => {
    const streakArray = userData.streakDays.map(
        (day) => day && getDateType(day.date),
    );

    let count = 0;
    const hasToday = streakArray.some((el) =>
        el ? el.getTime() === getDateType(today).getTime() : false,
    );

    streakArray.reverse().forEach((el, i) => {
        if (!el) return;
        const todayTimeCode = getDateType(today).getTime();
        const elTimeCode = el.getTime();
        if (hasToday && todayTimeCode - elTimeCode <= i * oneDay) count++;
        else if (!hasToday && todayTimeCode - elTimeCode <= (i + 1) * oneDay)
            count++;
    });

    return count;
};

export { getCurrentStreak, getLongestStreak };
