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

  componentDidMount = () => {
    console.log(this.state.employees);
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  searchEmployees = (query) => {
    const filteredEmployees = this.state.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    return filteredEmployees;
  };

  handleSortButton = () => {
    const newEmployees = !this.state.sort
      ? this.state.employees.sort((a, b) => (a.name > b.name ? 1 : -1))
      : this.state.default;
    console.log(newEmployees);
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
