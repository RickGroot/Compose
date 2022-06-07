import React from 'react';
import { ColoredBox } from '~source/ui';
import { TopicDifficulty, Topics } from '~source/types/data';
import { getPercentage } from '~source/core/calculations';
import { dataSets } from '~source/data/dataSets';
import UserContext, { UserState } from '~source/contexts/user-context';
import cx from 'classnames';

import $ from './difficultyBlock.module.scss';

const DifficultyBlock = ({
    level,
    subject,
    startQuiz,
}: {
    level: TopicDifficulty;
    subject: Topics;
    startQuiz: (level: TopicDifficulty) => void;
}) => {
    const user = React.useContext(UserState);
    const progress = user
        ? Math.floor(
              getPercentage(
                  dataSets[subject].levels[level].expNeeded,
                  user.progress[subject][level],
              ),
          )
        : null;
    const percentage = progress && progress > 100 ? 100 : progress || 0;
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
    const handleStart = () => {
        if (!user && level !== 'easy') return;
        startQuiz(level);
    };
    return (
        <ColoredBox
            className={cx(
                $.container,
                !user && level !== 'easy' && $.containerHidden,
            )}
            color={getColor()}
            onClick={() => handleStart()}
            animate
        >
            <div className={$.icon}>
                <p>{[...Array(getAmountOfStars())].map(() => '\u2605')}</p>
            </div>
            <div>
                <h1 className={$.title}>{level}</h1>
                <p className={$.percentage}>
                    {user && `${percentage}% completed`}
                    {!user && level === 'easy' && 'Play now!'}
                </p>
            </div>
            <div
                className={cx(
                    $.progressBar,
                    percentage && $[`progressBar-${percentage}`],
                )}
            />
        </ColoredBox>
    );
};

export default DifficultyBlock;
