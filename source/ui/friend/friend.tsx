import React, { useContext, useReducer, useState } from 'react';
import { Friend } from '~source/types/friend';
import { getLongestStreak } from '~source/core/getStreak';
import getTodayScore from '~source/core/getScore';
import { ColoredBox } from '~source/ui';
import cx from 'classnames';

import $ from './friend.module.scss';
import { UpdateUser, UserState } from '~source/contexts/user-context';
import {
    acceptPending,
    addNewFriend,
    removeFriend,
    removeOutgoing,
    removePending,
} from '~source/core/friends';

const Friend = ({
    friend,
    type,
    forceUpdate,
}: {
    friend: Friend;
    type: 'friend' | 'pending' | 'outgoing' | 'new';
    forceUpdate: () => void;
}) => {
    const user = useContext(UserState);
    const updateUser = useContext(UpdateUser);
    const [removeFriendOpen, setRemoveFriendOpen] = useState(false);
    const [cancelFriendOpen, setCancelFriendOpen] = useState(false);

    if (!user) return null;

    const handleButtonPress = () => {
        if (type === 'friend') setRemoveFriendOpen(!removeFriendOpen);
        else setCancelFriendOpen(!cancelFriendOpen);
    };
    const handleRemoveFriend = () => {
        forceUpdate();
        updateUser(removeFriend(friend.userId, user));
    };
    const handleRemovePending = () => {
        forceUpdate();
        updateUser(removePending(friend.userId, user));
    };
    const handleAcceptPending = () => {
        forceUpdate();
        updateUser(acceptPending(friend.userId, user));
    };
    const handleRemoveOutgoing = () => {
        forceUpdate();
        updateUser(removeOutgoing(friend.userId, user));
    };
    const handleAddNewFriend = () => {
        forceUpdate();
        updateUser(addNewFriend(friend.userId, user));
    };
    return (
        <div className={$.friend} key={`${friend.userName}${friend.userId}`}>
            <ColoredBox className={$.icon}>
                <img
                    src={friend.img ? friend.img : '/icons/user.svg'}
                    alt={friend.userName}
                    className={cx(
                        $.iconContent,
                        !friend.img && $.iconContentPlaceholder,
                    )}
                />
            </ColoredBox>
            <div className={$.content}>
                <h3 className={$.name}>
                    {friend.userName}{' '}
                    <span className={$.nameId}>#{friend.userId}</span>
                </h3>
                {type === 'friend' && (
                    <>
                        <p className={$.info}>
                            Highest streak:{' '}
                            <span className={$.infoHighlight}>
                                {getLongestStreak(friend)} days
                            </span>
                        </p>

                        <p className={$.info}>
                            Daily challenge score:{' '}
                            <span className={$.infoHighlight}>
                                {getTodayScore(friend)?.score || 0}
                            </span>
                        </p>
                    </>
                )}
                {type === 'pending' && (
                    <p className={$.info}>
                        {friend.userName} wants to be your friend!
                    </p>
                )}
                {type === 'outgoing' && (
                    <p className={$.info}>
                        You have asked {friend.userName} to be your friend,
                        still waiting for a response...
                    </p>
                )}
                {type === 'new' && (
                    <p className={$.info}>
                        Ask {friend.userName} to be your friend!
                    </p>
                )}
            </div>
            {type === 'friend' && (
                <button
                    type="button"
                    className={$.dots}
                    onClick={() => handleButtonPress()}
                />
            )}
            {type === 'pending' && (
                <>
                    <button
                        type="button"
                        className={$.inviteCancel}
                        onClick={() => handleRemovePending()}
                    >
                        &#10007;
                    </button>
                    <button
                        type="button"
                        className={$.inviteAccept}
                        onClick={() => handleAcceptPending()}
                    >
                        &#10003;
                    </button>
                </>
            )}
            {type === 'outgoing' && (
                <button
                    type="button"
                    className={$.inviteCancel}
                    onClick={() => handleRemoveOutgoing()}
                >
                    &#10007;
                </button>
            )}
            {type === 'new' && (
                <button
                    type="button"
                    className={$.inviteAccept}
                    onClick={() => handleAddNewFriend()}
                >
                    +
                </button>
            )}
            {removeFriendOpen && (
                <p className={$.remove} onClick={() => handleRemoveFriend()}>
                    Click to remove friend{' '}
                    <span className={$.removeCross}>X</span>
                </p>
            )}
        </div>
    );
};

export default Friend;
