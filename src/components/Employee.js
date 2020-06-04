import React from "react";

function Employee({ image, name, phone, email, dob }) {
  const emailLink = `mailto:${email}`;
  return (
    <tr>
      <td>
        <img src={image} alt={name}></img>
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{phone}</span>
      </td>
      <td>
        <a href={emailLink}>{email}</a>
      </td>
      <td>
        <span>{dob}</span>
      </td>
    </tr>
  );
}

export default Employee;
