import React from 'react';
import getTodayScore from '~source/core/getScore';
import { Friend } from '~source/types/friend';
import User from '~source/types/user';
import cx from 'classnames';

import $ from './leaderboard.module.scss';

type Score = {
    name: string;
    id: number;
    score: {
        date?: string;
        score: number;
    };
};

const Leaderboard = ({
    user,
    friends,
}: {
    user?: User;
    friends?: Friend[];
}) => {
    const [scores, setScores] = React.useState<Score[] | null>(null);
    const isMe = (rowData: Score) =>
        user?.userName === rowData.name && user?.userId === rowData.id;

    React.useEffect(() => {
        const friendScores: Score[] | undefined =
            friends &&
            Object.keys(friends).map((e: unknown) => {
                return {
                    name: friends[e as number].userName,
                    id: e as number,
                    score: getTodayScore(friends[e as number]) || { score: 0 },
                };
            });
        const yourScore = user && {
            name: user.userName,
            id: user.userId,
            score: getTodayScore(user) || { score: 0 },
        };

        if (!user) setScores(null);
        if (user && yourScore && !friendScores) setScores([yourScore]);
        if (friendScores && yourScore)
            setScores(
                [yourScore, friendScores]
                    .flat()
                    .sort((a, b) => b.score.score - a.score.score),
            );
        return;
    }, [user, friends]);

    return (
        <section className={$.container}>
            <h3 className={$.title}>Leaderboard</h3>
            {scores &&
                scores.map((row) => (
                    <div
                        className={cx($.row, isMe(row) && $.rowMe)}
                        key={`${row.name}${row.id}`}
                    >
                        <p className={$.rowItem}>
                            {isMe(row) ? 'Me' : row.name}
                        </p>
                        <p className={$.rowItem}>{row.score.score}</p>
                    </div>
                ))}
            {user && user.friends.length < 1 && (
                <div className={$.row}>
                    <p className={cx($.rowItem, $.rowItemError)}>
                        Add friends now!
                    </p>
                </div>
            )}
            {!user && (
                <div className={$.row}>
                    <p className={cx($.rowItem, $.rowItemError)}>
                        Log in to see your friends!
                    </p>
                </div>
            )}
        </section>
    );
};

export default Leaderboard;
