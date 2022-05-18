import type { NextPage } from 'next';
import Head from 'next/head';
import User from '~source/types/user';
import { DailyBlock, Leaderboard, Nav, StreaksBar } from '~source/ui';
import user from '../source/data/user';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';
import friends from '~source/data/friends';
import { Friend } from '~source/types/friend';

interface Props {
    userData: User;
    friendsData: Friend[];
}

const Home: NextPage<Props> = (props) => {
    const userData = props.userData;
    const friendsData = props.friendsData;
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

//! getServerSideProps added for possible future user data fetching
export async function getServerSideProps() {
    const userData = user;
    const friendsDataBase = friends;
    const friendsData = userData.friends.map(
        (friend) => friendsDataBase[friend],
    );
    return { props: { userData, friendsData } };
}

export default Home;
