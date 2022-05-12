import { useRouter } from 'next/router';
import React from 'react';
import { dataSets } from 'pages/data/dataSets';
import { DifficultyBlock } from '~source/ui';
import { TopicDifficulty } from '~source/types/data';

import $ from './quizHandler.module.scss';

const QuizHandler = () => {
    const router = useRouter();
    // const subject = router.query.subject as TopicDifficulty;
    const [subject, setSubject] = React.useState<TopicDifficulty | null>(null);

    const handleQuizStart = (level: TopicDifficulty) => {
        console.log(level);
    };
    const handleBackButton = () => {
        router.push({ pathname: '/learn' });
    };

    React.useEffect(() => {
        if (router.query.subject)
            setSubject(router.query.subject as TopicDifficulty);
        console.log(router.query);
    }, []);

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
