import React from 'react';
import getTodayScore from '~source/core/getScore';
import { getLongestStreak } from '~source/core/getStreak';
import User from '~source/types/user';
import { ColoredBox } from '~source/ui';
import cx from 'classnames';

import $ from './userData.module.scss';

const UserData = ({ user }: { user: User }) => {
    const dayScore = getTodayScore(user);
    const longestStreak = getLongestStreak(user);
    return (
        <section className={$.container}>
            <ColoredBox className={$.icon} backgroundType="radial" animate>
                <img
                    src={user.img ? user.img : '/icons/user.svg'}
                    alt={user.userName}
                    className={cx(
                        $.iconContent,
                        !user.img && $.iconContentPlaceholder,
                    )}
                />
            </ColoredBox>
            <h1 className={$.title}>{user.userName}</h1>
            <p className={$.id}>#{user.userId}</p>
            <p className={$.score}>
                Your highest streak:{' '}
                <span className={$.scoreHighlight}>{longestStreak} days</span>
            </p>
            <p className={$.score}>
                Daily challenge score:{' '}
                <span className={$.scoreHighlight}>{dayScore?.score || 0}</span>
            </p>
        </section>
    );
};

export default UserData;
