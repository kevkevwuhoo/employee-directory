import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import employees from "../employees";

class EmployeeContainer extends Component {
  state = {
    default: [...employees],
    employees: [...employees],
    search: "",
    sort: false,
  };

  // change search state when character is inputted by user
  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  // filter employees based on search query
  searchEmployees = (query) => {
    const filteredEmployees = this.state.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    return filteredEmployees;
  };

  // when caret is clicked by user, sort or unsort the employees
  handleSortButton = () => {
    const newEmployees = !this.state.sort
      ? this.state.employees.sort((a, b) => (a.name > b.name ? 1 : -1))
      : this.state.default;
    this.setState({
      sort: !this.state.sort,
      employees: [...newEmployees],
    });
  };

  render() {
    return (
      <main>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table
          employees={this.searchEmployees(this.state.search)}
          handleSortButton={this.handleSortButton}
          sort={this.state.sort}
        />
      </main>
    );
  }
}

export default EmployeeContainer;
