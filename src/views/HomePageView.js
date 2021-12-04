
import React from "react";

const styles = {
  container: {
    minHeight: "calc(75vh - 100px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
    color: "#472a09",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Добро пожаловать в вашу телефонную книгу. Авторизуйтесь чтобы продолжить.
    </h1>
  </div>
);

export default HomeView;