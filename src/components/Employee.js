import React from "react";

function Employee({ image, name, phone, email, dob }) {
  return (
    <tr>
      <td>
        <img src={image}></img>
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{phone}</span>
      </td>
      <td>
        <span>{email}</span>
      </td>
      <td>
        <span>{dob}</span>
      </td>
    </tr>
  );
}

export default Employee;
