import React from 'react';
import User from '~source/types/user';
import { BadgeProgress, Badges } from '~source/types/badge';
import { ColoredBox } from '~source/ui';
import { getPercentage } from '~source/core/calculations';
import { AvailableColors } from '~source/ui/colored-box/coloredBox';
import cx from 'classnames';

import $ from './badge.module.scss';

const BadgeComponent = ({
    user,
    badge,
    badges,
    color,
    setOpenedBadge,
    isCompleted,
}: {
    user: User;
    badge: BadgeProgress;
    badges: Badges;
    color: AvailableColors;
    setOpenedBadge: (e: number) => void;
    isCompleted: (e: BadgeProgress) => boolean;
}) => {
    const userLevel = user && user.badges[badge.id];
    const badgeLevels = badges[badge.id].levels;
    const badgeLevelKeys = Object.keys(badgeLevels);
    const isMaxLevel =
        badgeLevelKeys[badgeLevelKeys.length - 1] === userLevel.toString();
    return (
        <div
            className={$.badge}
            key={badge.id}
            onClick={() => setOpenedBadge(badge.id)}
        >
            <ColoredBox
                className={cx(
                    $.badgeIcon,
                    isCompleted(badge) && $.badgeIconComplete,
                    isMaxLevel && $.badgeIconCompleteMax,
                )}
                color={color}
            >
                <p
                    className={cx(
                        $.badgeIconImg,
                        $[`badgeIconImg-${badges[badge.id].iconType}`],
                    )}
                >
                    {badges[badge.id].icon}
                </p>
                {!isMaxLevel && (
                    <p className={$.badgeIconLevel}>
                        Level {badge.currentLevel}
                    </p>
                )}
                {isMaxLevel && <p className={$.badgeIconLevel}>Max level</p>}
            </ColoredBox>
            <div className={$.badgeContent}>
                <h3 className={$.badgeTitle}>{badges[badge.id].badgeName}</h3>
                <p className={$.badgeDescription}>
                    {badges[badge.id].levels[badge.currentLevel].desc}
                </p>
                <div className={$.badgeProgress}>
                    <div
                        className={cx(
                            $.badgeProgressBar,
                            isCompleted(badge) && $['badgeProgressBar-100'],
                            $[`badgeProgressBar-${color}`],
                            $[
                                `badgeProgressBar-${Math.floor(
                                    getPercentage(badge.needed, badge.progress),
                                )}`
                            ],
                            isCompleted(badge) && $.badgeProgressBarComplete,
                            isMaxLevel && $.badgeProgressBarCompleteMax,
                        )}
                    >
                        {isCompleted(badge) && (
                            <p className={$.badgeProgressBarText}>completed</p>
                        )}
                    </div>
                    {!isCompleted(badge) && (
                        <p className={$.badgeProgressText}>
                            {badge.progress} / {badge.needed}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BadgeComponent;
