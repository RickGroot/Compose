import React from 'react';
import { ColoredBox, Confetti } from '~source/ui';
import badges from '~source/data/badges';
import { AvailableColors } from '../colored-box/coloredBox';
import { UpdateUser, UserState } from '~source/contexts/user-context';
import cx from 'classnames';

import $ from './badgeOverlay.module.scss';

const BadgeOverlay = ({
    id,
    newLevel,
    close,
    color,
}: {
    id: number;
    newLevel: boolean;
    close: () => void;
    color?: AvailableColors;
}) => {
    const user = React.useContext(UserState);
    const updateUser = React.useContext(UpdateUser);
    const userLevel = user ? user.badges[id] : 0;
    const badgeLevels = badges[id].levels;
    const maxLevel = Object.keys(badgeLevels).length - 1;
    const getDescription = () => {
        if (userLevel >= maxLevel) return badgeLevels[maxLevel].desc;
        return badgeLevels[userLevel].desc;
    };
    const getNextLevel = () => {
        if (userLevel) {
            return userLevel < maxLevel ? badgeLevels[userLevel].desc : null;
        } else return badgeLevels['1'].desc;
    };

    const closeOverlay = () => {
        if (newLevel && user) {
            const newUser = () => {
                if (user.badges[id] + 1 <= maxLevel) {
                    user.badges[id]++;
                }
                return user;
            };
            updateUser(newUser());
        }
        close();
    };

    return (
        <section className={$.container} onClick={() => closeOverlay()}>
            {newLevel && <h2 className={$.new}>You have won a badge!</h2>}
            <ColoredBox color={color} className={$.icon}>
                <p
                    className={cx(
                        $.iconImg,
                        $[`iconImg-${badges[id].iconType}`],
                    )}
                >
                    {badges[id].icon}
                </p>
                <p className={$.iconLevel}>
                    Level {newLevel ? userLevel + 1 : userLevel}
                </p>
            </ColoredBox>
            <h1 className={$.title}>{badges[id].badgeName}</h1>
            <p className={$.description}>{getDescription()}</p>
            {getNextLevel() && (
                <p className={$.next}>Next level: {getNextLevel()}</p>
            )}
            {newLevel && <Confetti />}
        </section>
    );
};

export default BadgeOverlay;
