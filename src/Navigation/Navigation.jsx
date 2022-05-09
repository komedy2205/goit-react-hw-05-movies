import { NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css'

export default function Navigation() {
    return (
        <>
            <NavLink
                to="/"
                className={styles.link}
                // activeClassName={styles.activeLink}
            >
                Home
            </NavLink>
            <NavLink
                to="movies"
                className={styles.link}
                // activeClassName={styles.activeLink}
            >
                Movies
            </NavLink>
        </>
    )
}