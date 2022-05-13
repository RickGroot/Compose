import { useRouter } from 'next/router';
import React from 'react';
import { dataSets } from '~source/data/dataSets';
import { DifficultyBlock } from '~source/ui';
import { TopicDifficulty } from '~source/types/data';

import $ from './quizHandler.module.scss';

const QuizHandler = ({ subject }: { subject: TopicDifficulty }) => {
    const router = useRouter();

    const handleQuizStart = (level: TopicDifficulty) => {
        console.log(level);
    };
    const handleBackButton = () => {
        router.push({ pathname: '/learn' });
    };

    return (
        <section className={$.container}>
            {subject &&
                Object.keys(dataSets[subject].levels).map((level) => (
                    <DifficultyBlock
                        level={level as TopicDifficulty}
                        subject={subject}
                        startQuiz={(level) => handleQuizStart(level)}
                        key={level}
                    />
                ))}
            <button
                type="button"
                className={$.backButton}
                onClick={() => handleBackButton()}
            >
                &larr; Go back
            </button>
        </section>
    );
};

export default QuizHandler;
