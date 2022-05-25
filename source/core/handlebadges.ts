import { Badges, Badge } from '~source/types/badge';
import User from '~source/types/user';
import { getLongestStreak } from './getStreak';

/*
ID's:
1: challenger
2: friends
3: quizmaster
4: 
*/

const getUserPropgress = (id: number, badge: Badge, user: User) => {
    if (id === 1) {
        return getLongestStreak(user);
    }
    if (id === 2) {
        return user.friends.length;
    }
    if (id === 3) {
        return user.quizzesDone;
    }
    return 0;
};

const getCurrentLevel = (id: number, user: User) => {
    const userLevel = user.badges[id];
    return userLevel || 0;
};

const nextLevelRequired = (id: number, badge: Badge, user: User) => {
    const userLevel = user.badges[id];
    if (userLevel) {
        return badge.levels[userLevel].amountToComplete;
    }
    const firstLevel = parseInt(Object.keys(badge.levels)[0]);
    return badge.levels[firstLevel].amountToComplete;
};

const getBadgeProgress = (id: number, badge: Badge, user: User) => {
    const badgeProgress = {
        id,
        needed: nextLevelRequired(id, badge, user),
        currentLevel: getCurrentLevel(id, user),
        progress: getUserPropgress(id, badge, user),
    };

    return badgeProgress;
};

const getAllBadges = (user: User, badges: Badges) => {
    const data = Object.keys(badges).map((badge) => {
        const id = parseInt(badge);
        return getBadgeProgress(id, badges[id], user);
    });

    return data;
};

const getBadge = (id: number, user: User, badges: Badges) => {
    const data = getBadgeProgress(id, badges[id], user);
    return data;
};

export { getAllBadges, getBadge };
