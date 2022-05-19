import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { getQuiztopics, randomizeTopics } from '~source/core/getQuizData';
import { TopicDifficulty, Topics } from '~source/types/data';
import { QuestionResult } from '~source/types/questions';
import { Nav, QuestionBlock } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';

interface Props {
    test: Topics | 'Daily';
    difficulty: TopicDifficulty | 'none';
    topicIds: number[];
}

const Quiz: NextPage<Props> = (props) => {
    const { test, difficulty, topicIds } = props;
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<number>(0);
    const [results, setResults] = useState<QuestionResult[]>([]);

    const handleNext = (questionResults: QuestionResult) => {
        setResults([...results, questionResults]);
        if (activeItem === topicIds.length - 1) setIsFinished(true);
        else setActiveItem(activeItem + 1);
    };
    return (
        <>
            <Head>
                <title>Compose | Quiz {test}</title>
                <meta
                    name="description"
                    content="Compose, learn music theory everywhere"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={$.main}>
                {!isFinished && (
                    <QuestionBlock
                        topicId={topicIds[activeItem]}
                        next={(result) => handleNext(result)}
                    />
                )}
                {isFinished &&
                    results.map((result) => (
                        <p>
                            {result.userAnswer}
                            {result.isCorrect && ' <- this one was correct'}
                        </p>
                    ))}
            </main>
        </>
    );
};

export async function getServerSideProps(context: {
    query: { test: Topics | 'daily'; difficulty: TopicDifficulty | 'none' };
}) {
    const { test, difficulty } = context.query;
    const topicData = getQuiztopics({ topic: test, difficulty });
    const topicIds = randomizeTopics(topicData, difficulty);
    return { props: { test, difficulty, topicIds } };
}

export default Quiz;
