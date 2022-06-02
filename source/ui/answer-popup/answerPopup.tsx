import React from 'react';
import { QuestionResult } from '~source/types/questions';
import { ColoredBox } from '~source/ui';
import cx from 'classnames';

import $ from './answerPopup.module.scss';
import { getXp } from '~source/core/getResults';

const AnswerPopup = ({ data }: { data: QuestionResult }) => {
    return (
        <section
            className={cx(
                $.container,
                data.isCorrect && $.containerCorrect,
                !data.isCorrect && $.containerIncorrect,
            )}
        >
            <h1 className={$.title}>
                {data.isCorrect ? 'Nice one!' : 'Whoops, that is incorrect!'}
            </h1>
            <ColoredBox
                className={cx($.message)}
                color={data.isCorrect ? 'green' : 'red'}
                animate
            >
                <p className={$.icon}>{data.isCorrect ? '\u2713' : '\u2717'}</p>
            </ColoredBox>
            <p className={$.description}>
                {data.isCorrect && `+${getXp([data])}xp`}
                {!data.isCorrect && 'Correct answer:'}
                {!data.isCorrect && (
                    <span className={$.descriptionBold}>
                        {data.correctAnswer}
                    </span>
                )}
            </p>
        </section>
    );
};

export default AnswerPopup;
