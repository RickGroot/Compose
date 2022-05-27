import React from 'react';
import { ColoredBox } from '~source/ui';
import badges from '~source/data/badges';
import cx from 'classnames';

import $ from './badgeOverlay.module.scss';
import { AvailableColors } from '../colored-box/coloredBox';
import UserContext, { UserState } from '~source/contexts/user-context';

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
    const userLevel = user.badges[id];
    const badgeLevels = badges[id].levels;
    const getDescription = () =>
        userLevel ? badgeLevels[userLevel].desc : badgeLevels['1'].desc;
    const getNextLevel = () => {
        const maxLevel = Object.keys(badgeLevels).length;
        if (userLevel) {
            return userLevel < maxLevel
                ? badgeLevels[userLevel + 1].desc
                : badgeLevels[maxLevel].desc;
        } else return badgeLevels['1'].desc;
    };

    return (
        <section className={$.container} onClick={() => close()}>
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
                <p className={$.iconLevel}>Level {userLevel}</p>
            </ColoredBox>
            <h1 className={$.title}>{badges[id].badgeName}</h1>
            <p className={$.description}>{getDescription()}</p>
            <p className={$.next}>Next level: {getNextLevel()}</p>
        </section>
    );
};

export default BadgeOverlay;
