import React from 'react';
import { ColoredBox } from '~source/ui';

import $ from './dailyBlock.module.scss';

const DailyBlock = () => {
    const today = new Date();
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
                Your highscore: <span className={$.scoreHighlight}>1200</span>
            </p>
            <ColoredBox
                color="green"
                className={$.button}
                backgroundType="linear"
            >
                <p className={$.buttonText}>Play Now!</p>
                <a href="" className={$.buttonLink} />
            </ColoredBox>
        </section>
    );
};

export default DailyBlock;
