import { useRouter } from 'next/router';
import React from 'react';
import { CalendarIcon, LearnIcon, UserIcon } from './icons';
import $ from './nav.module.scss';

const Nav = () => {
    const router = useRouter();
    const handleNav = (page: string) => {
        page === 'daily' ? router.push('/') : router.push(page);
    };

    return (
        <nav className={$.container}>
            <button
                onClick={() => handleNav('learn')}
                type="button"
                className={$.item}
            >
                <LearnIcon colored={router.route === '/learn'} />
                <p className={$.itemText}>Learn</p>
            </button>
            <button
                onClick={() => handleNav('daily')}
                type="button"
                className={$.item}
            >
                <CalendarIcon colored={router.route === '/'} />
                <p className={$.itemText}>Daily Challenge</p>
            </button>
            <button
                onClick={() => handleNav('me')}
                type="button"
                className={$.item}
            >
                <UserIcon colored={router.route === '/me'} />
                <p className={$.itemText}>Me</p>
            </button>
        </nav>
    );
};

export default Nav;
