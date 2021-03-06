import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import $ from './confetti.module.scss';

const Confetti = () => {
    const refAnimationInstance = useRef<any>(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: number, opts: any) => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio),
            });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
            colors: ['#f2950e', '#0baca4', '#3794df', '#da124d'],
            disableForReducedMotion: true,
        });

        makeShot(0.2, {
            spread: 60,
            colors: ['#f2950e', '#0baca4', '#3794df', '#da124d'],
            disableForReducedMotion: true,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
            colors: ['#f2950e', '#0baca4', '#3794df', '#da124d'],
            disableForReducedMotion: true,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
            colors: ['#f2950e', '#0baca4', '#3794df', '#da124d'],
            disableForReducedMotion: true,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
            colors: ['#f2950e', '#0baca4', '#3794df', '#da124d'],
            disableForReducedMotion: true,
        });
    }, [makeShot]);

    useEffect(() => {
        fire();
    }, []);
    return (
        <ReactCanvasConfetti
            refConfetti={getInstance}
            className={$.container}
        />
    );
};

export default Confetti;
