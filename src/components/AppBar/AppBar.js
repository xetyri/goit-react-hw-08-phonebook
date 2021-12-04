import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import User from "../User/User";
import Account from "../Account/Account";
import { authSelectors } from "../../redux/auth";
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <User /> : <Account />}
    </header>
  );
}

