import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav, TestBlock } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';

const Home: NextPage = () => {
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
                <h1 className={$.title}>Test your knowledge</h1>
                <TestBlock />
            </main>
        </>
    );
};

export default Home;
