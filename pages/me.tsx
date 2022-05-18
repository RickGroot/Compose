import type { NextPage } from 'next';
import Head from 'next/head';
import friends from '~source/data/friends';
import user from '~source/data/user';
import { Friend } from '~source/types/friend';
import User from '~source/types/user';
import { Achievements, Friends, Nav, UserData } from '~source/ui';
import $ from '../styles/pages/Page.module.scss';

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
                <Achievements user={userData} />
                <Friends friends={friendsData} />
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
