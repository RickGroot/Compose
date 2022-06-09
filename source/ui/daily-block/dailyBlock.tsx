import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import getTodayScore from '~source/core/getScore';
import data from '~source/data/data';
import User from '~source/types/user';
import { ColoredBox } from '~source/ui';
import cx from 'classnames';

import $ from './dailyBlock.module.scss';

type CurrentIcon = { iconType: 'icon' | 'text'; icon: string };

const DailyBlock = ({ user }: { user: User | null }) => {
    const [toggleAnimation, setToggleAnimation] = useState(true);
    const [icon, setIcon] = useState<CurrentIcon>({
        iconType: 'icon',
        icon: '\uD834\uDD61',
    });
    const today = new Date();
    const dayScore = user && getTodayScore(user);
    const dataArray = Object.keys(data);

    useEffect(() => {
        const interval = setTimeout(() => {
            const randomIconId =
                dataArray[Math.floor(Math.random() * dataArray.length)];
            const randomIcon = data[parseInt(randomIconId)];
            setIcon({
                iconType: randomIcon.iconType,
                icon: randomIcon.icon,
            });
        }, 5000);

        return () => {
            clearTimeout(interval);
        };
    }, [icon]);

    useEffect(() => {
        setToggleAnimation(false);
        const toggle = setTimeout(() => {
            setToggleAnimation(true);
        }, 100);

        return () => clearTimeout(toggle);
    }, [icon]);
    return (
        <section className={$.container}>
            <ColoredBox
                className={$.icon}
                color="yellow"
                backgroundType="radial"
            >
                <p
                    className={cx(
                        $.iconContent,
                        icon.iconType === 'text' && $.iconContentText,
                        toggleAnimation && $.iconContentAnimate,
                    )}
                >
                    {icon.icon}
                </p>
            </ColoredBox>
            <h2 className={$.challengeTitle}>Daily Challenge</h2>
            <h1 className={$.title}>
                {today.getDate()}
                {' - '}
                {today.getMonth()}
                {' - '}
                {today.getFullYear()}
            </h1>
            {user && (
                <p className={$.score}>
                    Your highscore:{' '}
                    <span className={$.scoreHighlight}>
                        {dayScore?.score || 0}
                    </span>
                </p>
            )}
            <ColoredBox
                color="green"
                className={$.button}
                backgroundType="linear"
                animate
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
