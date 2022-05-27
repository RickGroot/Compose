import React from 'react';
import { QuestionResult } from '~source/types/questions';
import cx from 'classnames';

import $ from './answerPopup.module.scss';
import { getXp } from '~source/core/getResults';

const AnswerPopup = ({ data }: { data: QuestionResult }) => {
    return (
        <section className={$.container}>
            <div
                className={cx(
                    $.message,
                    data.isCorrect && $.messageCorrect,
                    !data.isCorrect && $.messageIncorrect,
                )}
            >
                <p className={$.text}>{data.isCorrect ? 'Nice!' : 'Whoops!'}</p>
                <p className={$.icon}>{data.isCorrect ? '\u2713' : '\u2717'}</p>
                <p className={$.description}>
                    {data.isCorrect && `+${getXp([data])}xp`}
                    {!data.isCorrect && 'Correct answer:'}
                    {!data.isCorrect && (
                        <span className={$.descriptionBold}>
                            {data.correctAnswer}
                        </span>
                    )}
                </p>
            </div>
        </section>
    );
};

export default AnswerPopup;
