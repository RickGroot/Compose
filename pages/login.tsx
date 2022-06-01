import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { storageName, UpdateUser } from '~source/contexts/user-context';
import { useContext } from 'react';
import Form from '../styles/pages/Login.module.scss';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';
import { user } from '~source/data/user';

const Login: NextPage = () => {
    const updateUser = useContext(UpdateUser);
    const router = useRouter();
    const handleLogin = () => {
        updateUser(user);
        localStorage.setItem(storageName, JSON.stringify(user));
        router.push({ pathname: '/' });
    };
    const handleback = () => {
        router.push({ pathname: '/' });
    };
    return (
        <>
            <Head>
                <title>Compose | Log in</title>
                <meta
                    name="description"
                    content="Compose, learn music theory everywhere"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={cx($.main, Form.page)}>
                <h1 className={$.title}>Log in to your account</h1>
                <form className={Form.form}>
                    <label htmlFor="mail" className={Form.formLabel}>
                        E-mail
                        <input
                            type="email"
                            name="mail"
                            id="mail"
                            className={Form.formInput}
                            value="IlseVGrachten@gmail.com"
                        />
                    </label>
                    <label htmlFor="password" className={Form.formLabel}>
                        Password
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={Form.formInput}
                            value="HeyIkBenIlse123"
                        />
                        <span className={Form.formLabelLink}>
                            I forgot my password
                        </span>
                    </label>
                </form>
                <button
                    type="button"
                    className={Form.formSubmit}
                    onClick={() => handleLogin()}
                >
                    Login
                </button>
                <a href="/register" className={Form.switch}>
                    No account? Register now!
                </a>
                <button className={Form.back} onClick={() => handleback()}>
                    &#xab; Go back
                </button>
            </main>
        </>
    );
};

export default Login;
