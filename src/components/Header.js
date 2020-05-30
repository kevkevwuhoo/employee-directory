import React from "react";

function Header() {
  return (
    <header>
    <div style={styles.headerStyle} className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Say hello to your team.</p>
      </div>
    </div>
    </header>
  );
}

export default Header;

const styles = {
  headerStyle: {
    backgroundColor: "blue",
    color: "white",
    display: "flex",
    textAlign: "center",
    margin: "0",
  },
};
