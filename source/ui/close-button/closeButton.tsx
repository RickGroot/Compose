import React from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import $ from './closeButton.module.scss';

const CloseButton = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const router = useRouter();
    const handleRedirect = () => {
        const { test } = router.query;
        if (test === 'daily') router.push({ pathname: '/' });
        else router.push({ pathname: `/learn/${test}` });
    };
    return (
        <section className={$.container}>
            {!isOpen && (
                <button
                    type="button"
                    className={cx($.button, $.buttonCross)}
                    aria-label="quit quiz"
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}
            {isOpen && (
                <div className={$.chooseContainer}>
                    <button
                        type="button"
                        className={cx($.button, $.buttonNo)}
                        aria-label="quit quiz"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        No
                    </button>
                    <button
                        type="button"
                        className={cx($.button, $.buttonYes)}
                        aria-label="continue"
                        onClick={() => handleRedirect()}
                    >
                        Yes
                    </button>
                    <p className={$.chooseContainerMessage}>
                        Are you sure you want to quit?
                    </p>
                </div>
            )}
        </section>
    );
};

export default CloseButton;
