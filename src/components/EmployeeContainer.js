import React, { Component } from "react";
import Search from "./Search";
import Table from "./Table";
import employees from "../employees";

class EmployeeContainer extends Component {
  state = {
    employees: employees,
    search: "",
    filtered: [],
  };

  componentDidMount = () => {
    console.log(this.state.employees);
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
    this.searchEmployees(this.state.search);
  };

  searchEmployees = (query) => {
    const filteredEmployees = this.state.employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    this.setState({ filtered: filteredEmployees });
  };

  render() {
    return (
      <main>
        <Search handleInputChange={this.handleInputChange} />
        <Table
          employees={
            this.state.filtered.length
              ? this.state.filtered
              : this.state.employees
          }
        />
      </main>
    );
  }
}

export default EmployeeContainer;
