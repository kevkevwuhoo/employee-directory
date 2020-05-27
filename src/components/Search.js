import React from "react";

// has outline, with shadow
// turnary condition for x icon to appear
  // appears when there's text
  // clears the input
// event listener: on change
  // will render employee data
  // map through employee array to filter cards based on input
// search bar must lie below the table to send data to it

function Search() {
  return (
    <nav style={styles.searchBar} className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </nav>
  );
}

export default Search;

const styles = {
  searchBar: {
    display: "flex",
    justifyContent: "center",
  }
}