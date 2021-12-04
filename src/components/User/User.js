import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import Button from "@mui/material/Button";
import styles from "./User.module.css";

export default function User() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);


  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {" "}
        <span className={styles.login}>Добро пожаловать </span> {name}
      </span>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выход
      </Button>
    </div>
  );
}
