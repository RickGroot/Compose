import type { NextPage } from 'next';
import Head from 'next/head';
import { Topics } from '~source/types/data';
import { Nav, QuizHandler } from '~source/ui';
import $ from '../../styles/pages/Page.module.scss';

interface Props {
    subject: Topics;
}

const Subject: NextPage<Props> = (props) => {
    return (
        <>
            <Head>
                <title>Compose | Learn</title>
                <meta
                    name="description"
                    content="Compose, learn music theory everywhere"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={$.main}>
                <Nav />
                <h1 className={$.title}>Choose your difficulty</h1>
                <QuizHandler subject={props.subject} />
            </main>
        </>
    );
};

export async function getServerSideProps(context: {
    query: { subject: string };
}) {
    const { subject } = context.query;
    return { props: { subject } };
}

export default Subject;
