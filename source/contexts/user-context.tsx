import * as React from 'react';
import user from '~source/data/user';
import User from '~source/types/user';

export const UserState = React.createContext(user);
export const UpdateUser = React.createContext((e: User) => {});

const Provider = ({ children }: { children: any }) => {
    const [data, setData] = React.useState<User>(user);

    return (
        <UserState.Provider value={data}>
            <UpdateUser.Provider value={setData}>
                {children}
            </UpdateUser.Provider>
        </UserState.Provider>
    );
};

export default Provider;
