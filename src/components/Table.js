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
              <td>
                <img src={employee.image}></img>
              </td>
              <td>
                <span>{employee.name}</span>
              </td>
              <td>
                <span>{employee.phone}</span>
              </td>
              <td>
                <span>{employee.email}</span>
              </td>
              <td>
                <span>{employee.dob}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
