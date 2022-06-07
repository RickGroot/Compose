import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import $ from './closeButton.module.scss';

const CloseButton = ({ closeFriend }: { closeFriend?: () => void }) => {
    const router = useRouter();
    const handleRedirect = () => {
        if (closeFriend) return closeFriend();
        const { test } = router.query;
        if (test === 'daily') router.push({ pathname: '/' });
        else router.push({ pathname: `/learn/${test}` });
    };
    return (
        <button
            type="button"
            className={cx($.button, closeFriend && $.buttonDark)}
            aria-label="quit quiz"
            onClick={() => handleRedirect()}
        />
    );
};

export default CloseButton;
