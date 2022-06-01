import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { storageName, UpdateUser } from '~source/contexts/user-context';
import { useContext } from 'react';
import Form from '../styles/pages/Login.module.scss';
import cx from 'classnames';
import $ from '../styles/pages/Page.module.scss';
import { emptyUser } from '~source/data/user';

const Register: NextPage = () => {
    const updateUser = useContext(UpdateUser);
    const router = useRouter();
    const handleLogin = () => {
        updateUser(emptyUser);
        localStorage.setItem(storageName, JSON.stringify(emptyUser));
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
                            value="BartVanDerKolk@gmail.com"
                        />
                    </label>
                    <label htmlFor="username" className={Form.formLabel}>
                        Username
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className={Form.formInput}
                            value="Bart"
                        />
                    </label>
                    <label htmlFor="password" className={Form.formLabel}>
                        Password
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={Form.formInput}
                            value="HeyIkBenBart123"
                        />
                    </label>
                    <label htmlFor="repeatpassword" className={Form.formLabel}>
                        Password
                        <input
                            type="password"
                            name="repeatpassword"
                            id="repeatpassword"
                            className={Form.formInput}
                            value="HeyIkBenBart123"
                        />
                    </label>
                </form>
                <button
                    type="button"
                    className={Form.formSubmit}
                    onClick={() => handleLogin()}
                >
                    Register
                </button>
                <a href="/login" className={Form.switch}>
                    Already have an account? Log in!
                </a>
                <button className={Form.back} onClick={() => handleback()}>
                    &#xab; Go back
                </button>
            </main>
        </>
    );
};

export default Register;
