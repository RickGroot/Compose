import { Badges, Badge } from '~source/types/badge';
import { TopicDifficulty, Topics } from '~source/types/data';
import User from '~source/types/user';
import { getLongestStreak } from './getStreak';

/*
ID's:
1: challenger
2: friends
3: quizmaster
4: dynamics
5: tempo
6: articulation
7: ornamentation
8: notes
*/

const getUserPropgress = (id: number, badge: Badge, user: User) => {
    if (id === 1) return getLongestStreak(user);
    if (id === 2) return user.friends.length;
    if (id === 3) return user.quizzesDone;
    return 0;
};

const getUserTopicPropgress = (id: number, level: number, user: User) => {
    const levelname = (topic: Topics): TopicDifficulty =>
        Object.keys(user.progress[topic])[level] as TopicDifficulty;
    if (id === 4) return user.progress.dynamics[levelname('dynamics')];
    if (id === 5) return user.progress.tempo[levelname('tempo')];
    if (id === 6) return user.progress.articulation[levelname('articulation')];
    if (id === 7)
        return user.progress.ornamentation[levelname('ornamentation')];
    if (id === 8) return user.progress.notes[levelname('notes')];

    return 0;
};

const nextLevelRequired = (id: number, badge: Badge, level: number) => {
    if (level) {
        return badge.levels[level].amountToComplete;
    }
    const firstLevel = parseInt(Object.keys(badge.levels)[0]);
    return badge.levels[firstLevel].amountToComplete;
};

const getBadgeProgress = (id: number, badge: Badge, user: User) => {
    const level = user.badges[id] || 0;
    const badgeProgress = {
        id,
        needed: nextLevelRequired(id, badge, level),
        currentLevel: level,
        progress: badge.topic
            ? getUserTopicPropgress(id, level, user)
            : getUserPropgress(id, badge, user),
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

const checkNextLevelBadge = (id: number, user: User, badges: Badges) => {
    return false;
};

export { getAllBadges, getBadge };
