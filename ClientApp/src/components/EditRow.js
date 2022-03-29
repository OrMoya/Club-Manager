import React from "react";

const EditRow = ({ memberData, cancelEditMember }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder={memberData.name}
          name="name"
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder={memberData.email}
          name="email"
        ></input>
      </td>
      <td>
        <input
          type="checkbox"
          required="required"
          checked={memberData.status}
          name="status"
        ></input>
      </td>
      <td>{memberData.joinDate}</td>
      <td>
        <button>Save</button>
        <button onClick={(event) => cancelEditMember(event)}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditRow;
