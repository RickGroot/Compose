import React from 'react';
import { Friend } from '~source/types/friend';
import { ColoredBox } from '~source/ui';
import cx from 'classnames';

import $ from './friends.module.scss';
import { getLongestStreak } from '~source/core/getStreak';
import getTodayScore from '~source/core/getScore';
import { useRouter } from 'next/router';

const Friends = ({ friends }: { friends: Friend[] | null }) => {
    const router = useRouter();
    const handleLogin = () => {
        router.push({
            pathname: '/login',
        });
    };
    const handleRegister = () => {
        router.push({
            pathname: '/register',
        });
    };
    if (!friends)
        return (
            <>
                <button
                    type="button"
                    className={cx($.loginButton, $.loginLogin)}
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
                <p className={$.loginText}>Or</p>
                <button
                    type="button"
                    className={cx($.loginButton)}
                    onClick={() => handleRegister()}
                >
                    Register
                </button>
            </>
        );
    return (
        <section className={$.container}>
            <h2 className={$.title}>Friends</h2>
            {friends.map((friend) => (
                <div
                    className={$.friend}
                    key={`${friend.userName}${friend.userId}`}
                >
                    <ColoredBox className={$.icon}>
                        <img
                            src={friend.img ? friend.img : '/icons/user.svg'}
                            alt={friend.userName}
                            className={cx(
                                $.iconContent,
                                !friend.img && $.iconContentPlaceholder,
                            )}
                        />
                    </ColoredBox>
                    <div className={$.content}>
                        <h3 className={$.name}>
                            {friend.userName}{' '}
                            <span className={$.nameId}>#{friend.userId}</span>
                        </h3>
                        <p className={$.info}>
                            Highest streak:{' '}
                            <span className={$.infoHighlight}>
                                {getLongestStreak(friend)} days
                            </span>
                        </p>
                        <p className={$.info}>
                            Daily challenge score:{' '}
                            <span className={$.infoHighlight}>
                                {getTodayScore(friend)?.score || 0}
                            </span>
                        </p>
                    </div>
                    <button type="button" className={$.dots}></button>
                </div>
            ))}
        </section>
    );
};

export default Friends;
