import Link from 'next/link';
import React from 'react';
import getTodayScore from '~source/core/getScore';
import User from '~source/types/user';
import { ColoredBox } from '~source/ui';

import $ from './dailyBlock.module.scss';

const DailyBlock = ({ user }: { user: User }) => {
    const today = new Date();
    const dayScore = getTodayScore(user);
    return (
        <section className={$.container}>
            <ColoredBox
                className={$.icon}
                color="yellow"
                backgroundType="radial"
            >
                <p className={$.iconContent}>\uD834\uDD61</p>
            </ColoredBox>
            <h2 className={$.challengeTitle}>Daily Challenge</h2>
            <h1 className={$.title}>
                {today.getDate()}
                {' - '}
                {today.getMonth()}
                {' - '}
                {today.getFullYear()}
            </h1>
            <p className={$.score}>
                Your highscore:{' '}
                <span className={$.scoreHighlight}>{dayScore?.score || 0}</span>
            </p>
            <ColoredBox
                color="green"
                className={$.button}
                backgroundType="linear"
            >
                <Link
                    href={{
                        pathname: '/quiz',
                        query: { test: 'daily', difficulty: 'none' },
                    }}
                >
                    <p className={$.buttonText}>Play Now!</p>
                </Link>
            </ColoredBox>
        </section>
    );
};

export default DailyBlock;
