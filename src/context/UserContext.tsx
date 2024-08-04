import {createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useState} from "react";
import {TUser} from "@/types/TUser";

type TUserContext = {
    user: TUser | null;
    setUser: Dispatch<SetStateAction<TUser | null>>;
}

const UserContext = createContext<TUserContext | null>(null)

type Props = {
    children: ReactNode
}
export const UserProvider: FC<Props> = ({children}) => {

    const [user, setUser] = useState<TUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = (): TUserContext => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};