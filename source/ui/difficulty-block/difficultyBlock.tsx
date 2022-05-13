import React from 'react';
import { dataSets } from '~source/data/dataSets';
import { ColoredBox } from '~source/ui';

import $ from './difficultyBlock.module.scss';
import { TopicDifficulty } from '~source/types/data';

const DifficultyBlock = ({
    level,
    subject,
    startQuiz,
}: {
    level: TopicDifficulty;
    subject: string;
    startQuiz: (level: TopicDifficulty) => void;
}) => {
    const getColor = () => {
        if (level === 'easy') return 'green';
        if (level === 'medium') return 'yellow';
        if (level === 'hard') return 'red';
    };
    const getAmountOfStars = () => {
        if (level === 'easy') return 1;
        if (level === 'medium') return 2;
        if (level === 'hard') return 3;
    };
    return (
        <ColoredBox
            className={$.container}
            color={getColor()}
            onClick={() => startQuiz(level)}
        >
            <div className={$.icon}>
                <p>{[...Array(getAmountOfStars())].map(() => '\u2605')}</p>
            </div>
            <h1 className={$.title}>{level}</h1>
            <div className={$.progressBar}></div>
        </ColoredBox>
    );
};

export default DifficultyBlock;
