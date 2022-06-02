import type { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';
import { DailyBlock, Leaderboard, Nav, StreaksBar } from '~source/ui';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';
import friends from '~source/data/friends';
import { UserState } from '~source/contexts/user-context';

const Home: NextPage = () => {
    const userData = useContext(UserState);
    const friendsData =
        userData && userData.friends.map((friend) => friends[friend]);
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
                <DailyBlock user={userData} />
                <Leaderboard user={userData} friends={friendsData} />
            </main>
        </>
    );
};

export default Home;
