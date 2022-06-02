import React from 'react';
import { BadgeOverlay } from '~source/ui';
import { getAllBadges } from '~source/core/handlebadges';
import { BadgeProgress, Badges } from '~source/types/badge';
import User from '~source/types/user';
import { availableColors } from '../colored-box/coloredBox';
import Badge from './badge';
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
    const isCompleted = (badge: BadgeProgress) =>
        badge.needed <= badge.progress;
    const badgeOverlayIsNew = () => {
        const badge = allBadgeData.find((e) => e.id === openedBadge);
        return badge ? isCompleted(badge) : false;
    };
    return (
        <section className={$.container}>
            <h2 className={$.title}>Achievements</h2>
            <div className={cx($.badges, $[`badges-${allBadgeData.length}`])}>
                {allBadgeData.map((badge, i) => (
                    <Badge
                        user={user}
                        badge={badge}
                        badges={badges}
                        color={color(i)}
                        setOpenedBadge={(e) => setOpenedBadge(e)}
                        isCompleted={(e) => isCompleted(e)}
                    />
                ))}
            </div>
            {openedBadge && (
                <BadgeOverlay
                    id={openedBadge}
                    newLevel={badgeOverlayIsNew()}
                    close={() => setOpenedBadge(null)}
                    color={color(openedBadge - 1)}
                />
            )}
        </section>
    );
};

export default Achievements;
