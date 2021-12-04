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
    color: "#FFFFFF",
  },
};

const ErrorView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
        Sorry, nothing was found at this address.
    </h1>
  </div>
);

export default ErrorView;