import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(
                    (registration) => {
                        console.log(
                            'Service Worker registration successful with scope: ',
                            registration.scope,
                        );
                    },
                    (err) => {
                        console.log(
                            'Service Worker registration failed: ',
                            err,
                        );
                    },
                );
            });
        }
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
