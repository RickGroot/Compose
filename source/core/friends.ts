import User from '~source/types/user';

const removeFriend = (friend: number, user: User): User => {
    const index = user.friends.indexOf(friend);
    if (index > -1) {
        user.friends.splice(index, 1);
    }
    return user;
};
const removePending = (friend: number, user: User): User => {
    const index = user.invites.pending.indexOf(friend);
    if (index > -1) {
        user.invites.pending.splice(index, 1);
    }
    return user;
};
const acceptPending = (friend: number, user: User): User => {
    const index = user.invites.pending.indexOf(friend);
    if (index > -1) {
        user.invites.pending.splice(index, 1);
        user.friends.push(friend);
    }
    return user;
};
const addOutgoing = (friend: number, user: User): User => {
    user.invites.outgoing.push(friend);
    return user;
};
const removeOutgoing = (friend: number, user: User): User => {
    const index = user.invites.outgoing.indexOf(friend);
    if (index > -1) {
        user.invites.outgoing.splice(index, 1);
    }
    return user;
};

export {
    removeFriend,
    acceptPending,
    removePending,
    addOutgoing,
    removeOutgoing,
};
