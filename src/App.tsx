import './App.css'
import { Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {useUser} from "./context/UserContext";
import { useNavigate } from 'react-router-dom';
import LoginPage from "@/pages/LoginPage/LoginPage";
import UserPage from "@/pages/UserPage/UserPage";
const App = () => {

    const navigate = useNavigate()

    const {user} = useUser()

    useEffect(() => {
        if (!user) navigate("/login")
    }, [user])

  return (
      <Routes>
          <Route path={"/user"} element={<UserPage/>}/>
          <Route path={"/login"} element={<LoginPage />}/>
      </Routes>
  )
}

export default App
