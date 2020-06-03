import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import employees from "../employees";

class EmployeeContainer extends Component {
  state = {
    employees: employees,
    search: "",
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

  render() {
    return (
      <main>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table employees={this.searchEmployees(this.state.search)} />
      </main>
    );
  }
}

export default EmployeeContainer;
