import React from 'react';
import { ColoredBox } from '~source/ui';
import { dataSets } from '~source/data/dataSets';
import { QuestionResult } from '~source/types/questions';
import { TopicDifficulty, Topics } from '~source/types/data';
import cx from 'classnames';

import $ from './quizDone.module.scss';
import { useRouter } from 'next/router';
import { getItemData } from '~source/core/getQuestion';
import { getScore, getXp } from '~source/core/getResults';

interface Props {
    results: QuestionResult[];
    test: Topics | 'daily';
    difficulty: TopicDifficulty | 'none';
}

const QuizDone = ({ results, test, difficulty }: Props) => {
    const router = useRouter();
    const [quizScore, setQuizScore] = React.useState<number | null>(null);
    const [quizXp, setQuizXp] = React.useState<number | null>(null);
    const endQuiz = () => {
        const { test } = router.query;
        if (test === 'daily') router.push({ pathname: '/' });
        else router.push({ pathname: `/learn/${test}` });
    };

    React.useEffect(() => {
        const userScore = getScore(results);
        const userXp = getXp(results);

        setQuizScore(userScore);
        setQuizXp(userXp);
        //!@todo: push data to the user
    }, []);
    return (
        <section className={$.container}>
            <ColoredBox className={$.head}>
                {test !== 'daily' && (
                    <>
                        <h1 className={$.title}>
                            Nicely done!
                            <br />
                            Quiz {test}, {difficulty}
                        </h1>
                        <p
                            className={cx(
                                $.icon,
                                dataSets[test].iconType === 'text' &&
                                    $.iconText,
                            )}
                        >
                            {dataSets[test].icon}
                        </p>
                    </>
                )}
                {test === 'daily' && (
                    <>
                        <h1 className={$.title}>
                            Nicely done!
                            <br />
                            Daily challenge
                        </h1>
                        <p className={cx($.icon, $.iconText)}>Daily</p>
                    </>
                )}
            </ColoredBox>
            <ColoredBox
                className={cx($.result, $.resultScore)}
                color="red"
                backgroundType="linear"
                animate
            >
                <p className={$.resultText}>Score:</p>
                <p className={$.resultText}>{quizScore ? quizScore : '0'}%</p>
            </ColoredBox>
            <ColoredBox
                className={cx($.result, $.resultXp)}
                color="red"
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
    );
};

export default QuizDone;
