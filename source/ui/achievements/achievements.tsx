import React from 'react';
import User from '~source/types/user';

import $ from './achievements.module.scss';

const Achievements = ({ user }: { user: User }) => {
    return (
        <section className={$.container}>
            <h2 className={$.title}>Achievements</h2>
            <p>This block needs a redesign, coming soon</p>
        </section>
    );
};

export default Achievements;
