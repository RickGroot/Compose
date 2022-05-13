import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav, QuizHandler } from '~source/ui';
import $ from '../../styles/pages/Page.module.scss';

const Subject: NextPage = () => {
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
                <QuizHandler />
            </main>
        </>
    );
};

export default Subject;
