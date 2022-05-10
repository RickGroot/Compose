import type { NextPage } from 'next';
import Head from 'next/head';
import $ from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextJS Template</title>
                <meta name="description" content="NextJS template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={$.main}>
                <h1 className={$.title}>Template for NextJS app</h1>

                <p className={$.description}>Rick Groot</p>
            </main>
        </>
    );
};

export default Home;
