import type { NextPage } from 'next';
import Head from 'next/head';
import { getQuiztopics, randomizeTopics } from '~source/core/getQuizData';
import { TopicDifficulty, Topics } from '~source/types/data';
import { Nav } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';

interface Props {
    test: Topics | 'Daily';
    difficulty: TopicDifficulty | 'none';
    topicIds: number[];
}

const Quiz: NextPage<Props> = (props) => {
    const { test, difficulty, topicIds } = props;
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
                <h1 className={$.title}>
                    {test}
                    {difficulty}
                    {topicIds}
                </h1>
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
