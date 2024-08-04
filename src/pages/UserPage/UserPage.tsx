import styles from "./UserPage.module.css"
import {useUser} from "@/context/UserContext";
import {useNavigate} from "react-router-dom";

const UserPage = () => {

    const navigate = useNavigate()

    const {user, setUser} = useUser()

    const onLogout = () => {
        setUser(null)
        navigate("/login")
    }

    return (
        <div className={styles.root_container}>
            <div className={styles.userCard}>
                <h2 className={styles.userName}>{user?.name || ""}</h2>
                <p className={styles.userEmail}>{user?.email || ""}</p>
                <button className={styles.logoutButton} onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default UserPage