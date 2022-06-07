import React from 'react';
import { ColoredBox } from '~source/ui';
import { dataSets } from '~source/data/dataSets';
import { QuestionResult } from '~source/types/questions';
import { TopicDifficulty, Topics } from '~source/types/data';
import { useRouter } from 'next/router';
import { getItemData } from '~source/core/getQuestion';
import { getScore, getXp } from '~source/core/getResults';
import getSaveTestData from '~source/core/saveUserData';
import { UserState } from '~source/contexts/user-context';
import User from '~source/types/user';
import cx from 'classnames';

import $ from './quizDone.module.scss';

interface Props {
    results: QuestionResult[];
    topic: Topics | 'daily';
    difficulty: TopicDifficulty | 'none';
    updateUser: (e: User) => void;
}

const QuizDone = ({ results, topic, difficulty, updateUser }: Props) => {
    const router = useRouter();
    const userContext = React.useContext(UserState);
    const quizXp = getXp(results);
    const quizScore = getScore(results);
    const { test } = router.query;

    const saveUser = () => {
        if (userContext) {
            const newUserData: User = getSaveTestData(
                results,
                topic,
                difficulty,
                userContext,
            );
            updateUser(newUserData);
        }
    };

    const endQuiz = () => {
        saveUser();

        if (test === 'daily') router.push({ pathname: '/' });
        else router.push({ pathname: `/learn/${test}` });
    };

    return (
        <>
            <ColoredBox className={$.head} color="red">
                {topic !== 'daily' && (
                    <>
                        <p
                            className={cx(
                                $.icon,
                                dataSets[topic].iconType === 'text' &&
                                    $.iconText,
                            )}
                        >
                            {dataSets[topic].icon}
                        </p>
                        <h1 className={$.title}>
                            Nicely done!
                            <br />
                            Quiz {topic}, {difficulty}
                        </h1>
                    </>
                )}
                {topic === 'daily' && (
                    <>
                        <p className={cx($.icon, $.iconText)}>Daily</p>
                        <h1 className={$.title}>
                            Nicely done!
                            <br />
                            Daily challenge
                        </h1>
                    </>
                )}
            </ColoredBox>
            <section className={$.container}>
                <ColoredBox
                    className={cx($.result, $.resultScore)}
                    color="blue"
                    backgroundType="linear"
                    animate
                >
                    <p className={$.resultText}>Score:</p>
                    <p className={$.resultText}>
                        {quizScore ? quizScore : '0'}%
                    </p>
                </ColoredBox>
                <ColoredBox
                    className={cx($.result, $.resultXp)}
                    color="blue"
                    backgroundType="linear"
                    animate
                >
                    <p className={$.resultText}>XP earned:</p>
                    <p className={$.resultText}>{quizXp ? quizXp : '0'}XP</p>
                </ColoredBox>
                <button
                    type="button"
                    onClick={() => endQuiz()}
                    className={$.endButton}
                >
                    End the quiz
                </button>
                <h2 className={$.view}>See your answers</h2>
                <section className={$.answers}>
                    {results.map((result, i) => {
                        const resultTopic = getItemData(result.itemId);
                        return (
                            <div
                                className={$.answer}
                                key={`${result.itemId} / ${i}`}
                            >
                                <p
                                    className={cx(
                                        $.answerIcon,
                                        result.isCorrect && $.answerIconCorrect,
                                        resultTopic.iconType === 'text' &&
                                            $.answerIconText,
                                    )}
                                >
                                    {resultTopic.icon}
                                </p>
                                <div className={$.answerContent}>
                                    <h3 className={$.answerQuestion}>
                                        {result.question}
                                    </h3>
                                    <p className={$.answerRow}>
                                        Your answer:{' '}
                                        <span className={$.answerRowLight}>
                                            {result.userAnswer}
                                        </span>
                                    </p>
                                    <p className={$.answerRow}>
                                        Correct answer:{' '}
                                        <span className={$.answerRowLight}>
                                            {result.correctAnswer}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </section>
        </>
    );
};

export default QuizDone;
