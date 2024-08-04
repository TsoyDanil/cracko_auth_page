import {FC, ReactNode} from "react";
import {UserProvider} from "@/context/UserContext";
import {BrowserRouter, Routes} from "react-router-dom";


type Props = {
    children: ReactNode
}

const Providers: FC<Props> = ({children}) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default Providers