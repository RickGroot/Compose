import React from 'react';
import { ColoredBox } from '~source/ui';

import $ from './difficultyBlock.module.scss';
import { TopicDifficulty, Topics } from '~source/types/data';
import { getPercentage } from '~source/core/calculations';
import { dataSets } from '~source/data/dataSets';
import user from '~source/data/user';

const DifficultyBlock = ({
    level,
    subject,
    startQuiz,
}: {
    level: TopicDifficulty;
    subject: Topics;
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
            animate
        >
            <div className={$.icon}>
                <p>{[...Array(getAmountOfStars())].map(() => '\u2605')}</p>
            </div>
            <div>
                <h1 className={$.title}>{level}</h1>
                <p className={$.percentage}>
                    {getPercentage(
                        dataSets[subject].levels[level].expNeeded,
                        user.progress[subject][level],
                    )}
                    % completed
                </p>
            </div>
            <div className={$.progressBar}></div>
        </ColoredBox>
    );
};

export default DifficultyBlock;
