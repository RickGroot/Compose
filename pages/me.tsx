import type { NextPage } from 'next';
import Head from 'next/head';
import friends from '~source/data/friends';
import badges from '~source/data/badges';
import { Achievements, Friends, Nav, UserData } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';
import { useContext } from 'react';
import { UserState } from '~source/contexts/user-context';

const Home: NextPage = () => {
    const userData = useContext(UserState);
    const friendsData =
        userData && userData.friends.map((friend) => friends[friend]);
    const badgeData = badges;
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
                <Nav />
                <UserData user={userData} />
                <Achievements user={userData} badges={badgeData} />
                <Friends friends={friendsData} />
            </main>
        </>
    );
};

export default Home;
