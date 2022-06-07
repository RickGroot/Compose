import React, { useEffect, useReducer, useState } from 'react';
import User from '~source/types/user';
import cx from 'classnames';
import { Friend as FriendComponent } from '~source/ui';
import { Friend } from '~source/types/friend';
import friends from '~source/data/friends';
import friend from '../friend';

import Form from '../../../styles/pages/Login.module.scss';
import $ from './addFriend.module.scss';
import CloseButton from '../close-button';

const AddFriend = ({ user, close }: { user: User; close: () => void }) => {
    const [sortedUsers, setSortedusers] = useState<Friend[] | null>(null);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [query, changeQuery] = useState<{
        name: null | string;
        id: null | string;
    }>({ name: '', id: '' });

    const getType = (userId: number) => {
        if (user.friends.includes(userId)) return 'friend';
        if (user.invites.pending.includes(userId)) return 'pending';
        if (user.invites.outgoing.includes(userId)) return 'outgoing';
        else return 'new';
    };

    useEffect(() => {
        const userArray = Object.keys(friends).map((e: any) => friends[e]);
        const newArray = userArray.filter((friendData) => {
            if (!query.name && !query.id) return friend;
            if (
                query.name &&
                friendData.userName
                    .toLowerCase()
                    .includes(query.name.toLowerCase())
            )
                return friend;
            if (query.id && friendData.userId.toString().includes(query.id))
                return friend;
            return;
        });
        const sortedArray = newArray
            .sort((a, b) => (a.userName > b.userName ? 1 : -1))
            .splice(0, 3);
        setSortedusers(sortedArray);
    }, [query]);

    useEffect(() => {
        const userArray = Object.keys(friends)
            .map((e: any) => friends[e])
            .sort((a, b) => (a.userName > b.userName ? 1 : -1))
            .splice(0, 3);
        setSortedusers(userArray);
    }, []);
    return (
        <section className={$.container}>
            <h1 className={$.title}>Add friend</h1>
            <form className={cx(Form.form, $.form)}>
                <label htmlFor="id" className={cx(Form.formLabel, $.label)}>
                    Username
                    <input
                        type="email"
                        name="id"
                        id="id"
                        className={cx(Form.formInput, $.input, $.inputUser)}
                        placeholder="Username"
                        onChange={(e) =>
                            changeQuery({
                                name: e.target.value,
                                id: query.id,
                            })
                        }
                    />
                </label>
                <label htmlFor="id" className={cx(Form.formLabel, $.label)}>
                    ID
                    <input
                        type="number"
                        name="number"
                        id="number"
                        className={cx(Form.formInput, $.input, $.inputId)}
                        placeholder="User-ID"
                        onChange={(e) =>
                            changeQuery({
                                name: query.name,
                                id: e.target.value,
                            })
                        }
                    />
                </label>
            </form>
            {sortedUsers &&
                sortedUsers.map((user) => (
                    <FriendComponent
                        forceUpdate={() => forceUpdate()}
                        friend={user}
                        type={getType(user.userId)}
                        key={user.userId}
                    />
                ))}
            <CloseButton closeFriend={() => close()} />
        </section>
    );
};

export default AddFriend;
