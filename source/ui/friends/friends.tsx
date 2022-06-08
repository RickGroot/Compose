import React, { useReducer, useState } from 'react';
import friends from '~source/data/friends';
import { useRouter } from 'next/router';
import { AddFriend, Friend } from '~source/ui';
import User from '~source/types/user';
import cx from 'classnames';

import $ from './friends.module.scss';

const Friends = ({ user }: { user: User | null }) => {
    const router = useRouter();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [isFriendsOpen, setIsFriendsOpen] = useState(false);
    const handleLogin = () => {
        router.push({
            pathname: '/login',
        });
    };
    const handleRegister = () => {
        router.push({
            pathname: '/register',
        });
    };
    const handleAddFriends = () => {
        setIsFriendsOpen(!isFriendsOpen);
    };
    if (!user)
        return (
            <>
                <button
                    type="button"
                    className={cx($.loginButton, $.loginLogin)}
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
                <p className={$.loginText}>Or</p>
                <button
                    type="button"
                    className={cx($.loginButton)}
                    onClick={() => handleRegister()}
                >
                    Register
                </button>
            </>
        );
    const friendsData = user.friends.map((friend) => friends[friend]);
    const pendingFriends = user.invites.pending.map(
        (friend) => friends[friend],
    );
    const outgoingFriends = user.invites.outgoing.map(
        (friend) => friends[friend],
    );
    return (
        <section className={$.container}>
            <h2 className={$.title}>Friends</h2>
            {friendsData.length > 0 && (
                <button
                    type="button"
                    className={$.addFriends}
                    onClick={() => handleAddFriends()}
                >
                    Add friend
                </button>
            )}
            {isFriendsOpen && (
                <AddFriend user={user} close={() => setIsFriendsOpen(false)} />
            )}
            {friendsData.map((friend) => (
                <Friend
                    forceUpdate={() => forceUpdate()}
                    friend={friend}
                    type="friend"
                    key={friend.userId}
                />
            ))}
            {pendingFriends.map((friend) => (
                <Friend
                    forceUpdate={() => forceUpdate()}
                    friend={friend}
                    type="pending"
                    key={friend.userId}
                />
            ))}
            {outgoingFriends.map((friend) => (
                <Friend
                    forceUpdate={() => forceUpdate()}
                    friend={friend}
                    type="outgoing"
                    key={friend.userId}
                />
            ))}
            {friendsData.length < 1 &&
                pendingFriends.length < 1 &&
                outgoingFriends.length < 1 && (
                    <button
                        type="button"
                        className={$.noFriends}
                        onClick={() => handleAddFriends()}
                    >
                        Add your friends now!
                    </button>
                )}
        </section>
    );
};

export default Friends;
