import User from '~source/types/user';
import { getDate, getDateType } from './getDate';

const oneDay = 1000 * 60 * 60 * 24; // day in miliseconds
const today = getDate();

const getLongestStreak = (userData: User) => {
    let successive: boolean[] = [];

    const streakArray = userData.streakDays.map(
        (day) => day && getDateType(day.date),
    );

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

const getCurrentStreak = (userData: User) => {
    let count = 0;

    const streakArray = userData.streakDays.map(
        (day) => day && getDateType(day.date),
    );

    streakArray.reverse().forEach((el, i) => {
        if (!el) return;
        if (getDateType(today).getTime() - el.getTime() <= i * oneDay) count++;
    });

    return count;
};

export { getCurrentStreak, getLongestStreak };
