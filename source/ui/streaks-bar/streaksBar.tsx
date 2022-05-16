import React from 'react';
import {
    getDate,
    getDayFromDate,
    getStreakDates,
    getDateType,
} from '~source/core/getDate';
import User from '~source/types/user';
import cx from 'classnames';

import $ from './streaksBar.module.scss';
import { getCurrentStreak, getLongestStreak } from '~source/core/getStreak';

const StreaksBar = ({ user }: { user: User }) => {
    const currentDate = getDate();
    const datesInBar = getStreakDates();
    const longestStreak = getLongestStreak(user);
    const currentStreak = getCurrentStreak(user);

    const hasPlayed = (date: string) =>
        !!user.streakDays.find((streakDay) => streakDay?.date === date);
    const hasNotPlayed = (date: string) =>
        !user.streakDays.find((streakDay) => streakDay?.date === date);

    const upcomingDate = (date: string) => {
        const ckeckingDate = getDateType(date);
        const today = new Date();
        today.setHours(23, 59, 59, 998);
        return ckeckingDate > today;
    };

    return (
        <section className={$.container}>
            <div className={$.bar}>
                {datesInBar.map((date) => (
                    <p
                        className={cx(
                            $.barDate,
                            currentDate === date && $.barDateToday,
                            hasPlayed(date) && $.barDateGreen,
                            hasNotPlayed(date) && $.barDateRed,
                            upcomingDate(date) && $.barDateUpcoming,
                        )}
                        key={date}
                    >
                        {getDayFromDate(date)}
                    </p>
                ))}
            </div>
            <div className={$.info}>
                <p className={$.infoCurrent}>
                    Current streak:{' '}
                    <span className={$.bold}>{currentStreak} days</span>
                </p>
                <p className={$.infoToday}>Today</p>
                <p className={$.infoLongest}>
                    Longest streak:{' '}
                    <span className={$.bold}>{longestStreak} days</span>
                </p>
            </div>
        </section>
    );
};

export default StreaksBar;
