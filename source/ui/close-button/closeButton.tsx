import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import $ from './closeButton.module.scss';

const CloseButton = () => {
    const router = useRouter();
    const handleRedirect = () => {
        const { test } = router.query;
        if (test === 'daily') router.push({ pathname: '/' });
        else router.push({ pathname: `/learn/${test}` });
    };
    return (
        <button
            type="button"
            className={cx($.button)}
            aria-label="quit quiz"
            onClick={() => handleRedirect()}
        />
    );
};

export default CloseButton;
