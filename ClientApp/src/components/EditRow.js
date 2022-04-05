import React, {useState} from "react";
import axios from "axios";

const EditRow = ({memberData, cancelEditMember}) => {

  const [editFormData, setEditFormData] = useState({
    fullname: "",
    email: "",
    status: false,
  });

  const handleEditFormChange = (event) => {
    // event.preventDefault();

    const fieldName = String(event.target.getAttribute("name"));
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const updateMember = async (e, member) => {
    e.preventDefault();
    
    const url = `/members/${member.id}`;
    const res = await axios.put(url, {fullname: editFormData.fullname, email: editFormData.email, status: editFormData.status})
  }
    return (
        <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder={memberData.fullname}
            name="fullname"
            // value={memberData.name}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter Email"
            name="email"
            value={memberData.email}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td> 
          <input
            type="checkbox"
            //checked={memberData.status}
            name="status"
            // value={memberData.status}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          {memberData.joinDate}
        </td>
        <td>
          <button type="submit" onClick={(e) => updateMember(e, memberData)}>Save</button>
          <button type="button" onClick={(e) => cancelEditMember(e)}>
            Cancel
          </button>
        </td>
      </tr>
    );
};

export default EditRow;