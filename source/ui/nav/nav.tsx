import { useRouter } from 'next/router';
import React from 'react';
import { CalendarIcon, LearnIcon, UserIcon } from './icons';
import cx from 'classnames';
import $ from './nav.module.scss';

const Nav = () => {
    const router = useRouter();
    const handleNav = (page: string) => {
        page === 'daily'
            ? router.push({ pathname: '/' })
            : router.push({ pathname: '/' + page });
    };

    const isLearn = router.route.includes('/learn');
    const isDaily = router.route === '/';
    const isMe = router.route === '/me';

    return (
        <nav className={$.container}>
            <button
                onClick={() => handleNav('learn')}
                type="button"
                className={$.item}
            >
                <LearnIcon colored={isLearn} />
                <p className={cx($.itemText, isLearn && $.active)}>Learn</p>
            </button>
            <button
                onClick={() => handleNav('daily')}
                type="button"
                className={$.item}
            >
                <CalendarIcon colored={isDaily} />
                <p className={cx($.itemText, isDaily && $.active)}>
                    Daily Challenge
                </p>
            </button>
            <button
                onClick={() => handleNav('me')}
                type="button"
                className={$.item}
            >
                <UserIcon colored={isMe} />
                <p className={cx($.itemText, isMe && $.active)}>Me</p>
            </button>
        </nav>
    );
};

export default Nav;
