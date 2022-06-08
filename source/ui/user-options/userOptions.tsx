import React, { useContext, useState } from 'react';
import cx from 'classnames';
import User from '~source/types/user';
import { storageName, UpdateUser } from '~source/contexts/user-context';

import $ from './userOptions.module.scss';

const UserData = ({ user }: { user: User | null }) => {
    const [isOpen, setIsOpen] = useState(false);
    const updateUser = useContext(UpdateUser);

    const handleLogout = () => {
        updateUser(null);
        localStorage.setItem(storageName, JSON.stringify(null));
    };
    return (
        <section className={$.container}>
            <button
                type="button"
                className={$.settings}
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src="/icons/settings.svg"
                    alt="user settings"
                    className={$.settingsImg}
                />
            </button>
            {isOpen && (
                <div className={$.popup}>
                    <button type="button" className={cx($.option)}>
                        Change password
                    </button>
                    <button type="button" className={cx($.option)}>
                        Change profile picture
                    </button>
                    <button type="button" className={cx($.option)}>
                        Change theme
                    </button>
                    <button
                        type="button"
                        className={cx($.option, $.logout)}
                        onClick={() => handleLogout()}
                    >
                        Log out
                    </button>
                </div>
            )}
        </section>
    );
};

export default UserData;
