import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { dataSets } from '~source/data/dataSets';
import { DifficultyBlock } from '~source/ui';
import { UserState } from '~source/contexts/user-context';
import { TopicDifficulty, Topics } from '~source/types/data';

import $ from './quizHandler.module.scss';

const QuizHandler = ({ subject }: { subject: Topics }) => {
    const router = useRouter();
    const user = useContext(UserState);

    const handleQuizStart = (level: TopicDifficulty) => {
        router.push({
            pathname: '/quiz',
            query: { test: subject, difficulty: level },
        });
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
            {!user && (
                <a href="/login" className={$.login}>
                    Log in to play other difficulties!
                </a>
            )}
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
