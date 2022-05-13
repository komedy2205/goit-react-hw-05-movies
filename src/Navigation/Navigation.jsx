import { NavLink } from "react-router-dom";
import { link } from '../Styled/Navigation.styled';

export default function Navigation() {
    return (
        <>
            <NavLink
                to="/"
                class={link}
                // activeClassName={styles.link.active}
            >
                Home
            </NavLink>
            <NavLink
                to="movies"
                class={link}
                // activeClassName={styles.activeLink}
            >
                Movies
            </NavLink>
        </>
    )
}