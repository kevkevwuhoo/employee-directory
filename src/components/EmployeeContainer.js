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

  // searchEmployees = (query) => {
  //   const filteredEmployees = this.state.employees.filter((employee) =>
  //     employee.name.includes(query)
  //   );
  //   this.setState({ employees: filteredEmployees });
  // };

  render() {
    return (
      <main>
        <Search handleInputChange={this.handleInputChange} />
        <Table employees={this.state.employees} />
      </main>
    );
  }
}

export default EmployeeContainer;
