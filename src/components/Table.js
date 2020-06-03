import React from "react";
import Employee from "./Employee";

function Table({ employees, handleSortButton }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">
            Name
            <span>
              <i className="fa fa-caret-down" onClick={handleSortButton}></i>
            </span>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            image={employee.image}
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
