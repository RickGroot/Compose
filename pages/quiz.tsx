import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';
import {
    getDailyTopics,
    getQuiztopics,
    randomizeTopics,
} from '~source/core/getQuizData';
import { TopicDifficulty, Topics } from '~source/types/data';
import { QuestionResult } from '~source/types/questions';
import { Nav, QuestionBlock, QuizDone } from '~source/ui';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';
import User from '~source/types/user';
import { UpdateUser } from '~source/contexts/user-context';

interface Props {
    test: Topics | 'daily';
    difficulty: TopicDifficulty | 'none';
    topicIds: number[];
}

const Quiz: NextPage<Props> = (props) => {
    const { test, difficulty, topicIds } = props;
    const updateUserState = useContext(UpdateUser);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<number>(0);
    const [results, setResults] = useState<QuestionResult[]>([]);

    const updateUser = (newUser: User) => {
        updateUserState(newUser);
    };

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

            <main className={cx($.main, !isFinished && $.mainQuiz)}>
                {!isFinished && (
                    <QuestionBlock
                        topicId={topicIds[activeItem]}
                        next={(result) => handleNext(result)}
                    />
                )}
                {isFinished && (
                    <>
                        <QuizDone
                            results={results}
                            topic={test}
                            difficulty={difficulty}
                            updateUser={(data) => updateUser(data)}
                        />
                        <Nav />
                    </>
                )}
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
    if (test !== 'daily') return { props: { test, difficulty, topicIds } };

    const dailyTopics = getDailyTopics();
    return { props: { test, difficulty, topicIds: dailyTopics } };
}

export default Quiz;
