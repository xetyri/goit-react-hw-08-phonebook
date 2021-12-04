import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Account.module.css';

// const styles = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 700,
//     color: "#2A363B",
//   },
//   activeLink: {
//     color: "#E84A5F",
//   },
// };

export default function Account() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
