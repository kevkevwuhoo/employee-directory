import React from "react";

function Table({ employees }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.image}</td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
