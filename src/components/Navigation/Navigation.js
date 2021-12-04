import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from './Navigation.module.css';

// const styles = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 700,
//     color: "#FFFFFF",
//   },
//   activeLink: {
//     color: "#E84A5F",
//   },
// };

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
        Главная страница
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}