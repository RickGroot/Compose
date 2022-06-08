import React, { useContext } from 'react';
import getTodayScore from '~source/core/getScore';
import { getLongestStreak } from '~source/core/getStreak';
import User from '~source/types/user';
import { ColoredBox, UserOptions } from '~source/ui';
import cx from 'classnames';

import $ from './userData.module.scss';

const UserData = ({ user }: { user: User | null }) => {
    const dayScore = user && getTodayScore(user);
    const longestStreak = user && getLongestStreak(user);
    return (
        <section className={$.container}>
            <ColoredBox className={$.icon} backgroundType="radial" animate>
                {user && (
                    <img
                        src={user.img ? user.img : '/icons/user.svg'}
                        alt={user.userName}
                        className={cx(
                            $.iconContent,
                            !user.img && $.iconContentPlaceholder,
                        )}
                    />
                )}
                {!user && (
                    <img
                        src={'/icons/user.svg'}
                        alt={'guest user'}
                        className={cx($.iconContent, $.iconContentPlaceholder)}
                    />
                )}
            </ColoredBox>
            <h1 className={$.title}>{user ? user.userName : 'Guest user'}</h1>
            {user && (
                <>
                    <p className={$.id}>#{user.userId}</p>
                    <p className={$.score}>
                        Your highest streak:{' '}
                        <span className={$.scoreHighlight}>
                            {longestStreak} days
                        </span>
                    </p>
                    <p className={$.score}>
                        Daily challenge score:{' '}
                        <span className={$.scoreHighlight}>
                            {dayScore?.score || 0}
                        </span>
                    </p>
                </>
            )}
            {user && <UserOptions user={user} />}
        </section>
    );
};

export default UserData;
