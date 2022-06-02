import * as React from 'react';
import User from '~source/types/user';

export const UserState = React.createContext<User | null>(null);
export const UpdateUser = React.createContext((e: User) => {});
export const storageName = 'compose-user';

const Provider = ({ children }: { children: any }) => {
    const [data, setData] = React.useState<User | null>(null);
    const isDefined = typeof window !== 'undefined';

    const updateUser = (user: User) => {
        localStorage.setItem(storageName, JSON.stringify(user));
        setData(user);
    };

    React.useEffect(() => {
        setData(
            JSON.parse(localStorage.getItem(storageName) || 'null') || null,
        );
    }, [isDefined]);

    React.useEffect(() => {
        const update = () => {
            setData(
                JSON.parse(localStorage.getItem(storageName) || 'null') || null,
            );
        };
        window.addEventListener('storage', update);
        return () => window.removeEventListener('storage', update);
    }, []);

    return (
        <UserState.Provider value={data}>
            <UpdateUser.Provider value={updateUser}>
                {children}
            </UpdateUser.Provider>
        </UserState.Provider>
    );
};

export default Provider;
