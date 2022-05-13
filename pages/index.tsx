import type { NextPage } from 'next';
import Head from 'next/head';
import User from '~source/types/user';
import { Nav, StreaksBar } from '~source/ui';
import user from '../source/data/user';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';

const Home: NextPage = (props: any) => {
    const userData: User = user;
    return (
        <>
            <Head>
                <title>Compose | Daily Challenge</title>
                <meta
                    name="description"
                    content="Compose, learn music theory everywhere"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={cx($.main, $.mainDaily)}>
                <Nav />
                <StreaksBar user={userData} />
            </main>
        </>
    );
};

//! getServerSideProps added for possible future user data fetching
export async function getServerSideProps() {
    const userData = user;
    return { props: { userData } };
}

export default Home;
