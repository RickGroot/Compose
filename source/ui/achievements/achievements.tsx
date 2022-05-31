import React from 'react';
import { ColoredBox, BadgeOverlay } from '~source/ui';
import { getAllBadges } from '~source/core/handlebadges';
import { Badges } from '~source/types/badge';
import User from '~source/types/user';
import { availableColors } from '../colored-box/coloredBox';
import { getPercentage } from '~source/core/calculations';
import cx from 'classnames';

import $ from './achievements.module.scss';

const Achievements = ({
    user,
    badges,
}: {
    user: User | null;
    badges: Badges;
}) => {
    const [openedBadge, setOpenedBadge] = React.useState<number | null>(null);

    if (!user)
        return (
            <>
                <h2 className={cx($.login, $.loginPrompt)}>
                    You are not logged in! Log in to get access to the
                    following:
                </h2>
                <p className={cx($.login, $.loginBenefits)}>
                    - Add your friends -
                </p>
                <p className={cx($.login, $.loginBenefits)}>
                    - Play harder difficulties -
                </p>
                <p className={cx($.login, $.loginBenefits)}>- Earn badges -</p>
                <p className={cx($.login, $.loginBenefits)}>
                    - Get a daily practise streak -
                </p>
            </>
        );

    const allBadgeData = getAllBadges(user, badges);
    const color = (index: number) =>
        availableColors[index % availableColors.length];
    return (
        <section className={$.container}>
            <h2 className={$.title}>Achievements</h2>
            <div className={cx($.badges, $[`badges-${allBadgeData.length}`])}>
                {allBadgeData.map((badge, i) => (
                    <div
                        className={$.badge}
                        key={badge.id}
                        onClick={() => setOpenedBadge(badge.id)}
                    >
                        <ColoredBox className={$.badgeIcon} color={color(i)}>
                            <p
                                className={cx(
                                    $.badgeIconImg,
                                    $[
                                        `badgeIconImg-${
                                            badges[badge.id].iconType
                                        }`
                                    ],
                                )}
                            >
                                {badges[badge.id].icon}
                            </p>
                            <p className={$.badgeIconLevel}>
                                Level {badge.currentLevel}
                            </p>
                        </ColoredBox>
                        <div className={$.badgeContent}>
                            <h3 className={$.badgeTitle}>
                                {badges[badge.id].badgeName}
                            </h3>
                            <p className={$.badgeDescription}>
                                {badge.currentLevel === 0
                                    ? badges[badge.id].levels[1].desc
                                    : badges[badge.id].levels[
                                          badge.currentLevel
                                      ].desc}
                            </p>
                            <div className={$.badgeProgress}>
                                <div
                                    className={cx(
                                        $.badgeProgressBar,
                                        badge.needed <= badge.progress &&
                                            $['badgeProgressBar-100'],
                                        $[`badgeProgressBar-${color(i)}`],
                                        $[
                                            `badgeProgressBar-${Math.floor(
                                                getPercentage(
                                                    badge.needed,
                                                    badge.progress,
                                                ),
                                            )}`
                                        ],
                                    )}
                                >
                                    {badge.needed <= badge.progress && (
                                        <p className={$.badgeProgressBarText}>
                                            completed
                                        </p>
                                    )}
                                </div>
                                {badge.needed >= badge.progress && (
                                    <p className={$.badgeProgressText}>
                                        {badge.progress} / {badge.needed}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {openedBadge && (
                <BadgeOverlay
                    id={openedBadge}
                    newLevel={false}
                    close={() => setOpenedBadge(null)}
                    color={color(openedBadge - 1)}
                />
            )}
        </section>
    );
};

export default Achievements;
