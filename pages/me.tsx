import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Compose | Me</title>
                <meta
                    name="description"
                    content="Compose, learn music theory everywhere"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={$.main}>
                <h1 className={$.title}>Me</h1>

                <Nav />
            </main>
        </>
    );
};

export default Home;
