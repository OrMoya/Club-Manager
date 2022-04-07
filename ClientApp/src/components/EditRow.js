import React, {useState} from "react";
import axios from "axios";
import './MemberTable.css'

const EditRow = ({memberData, cancelEditMember}) => {

  const [editFormData, setEditFormData] = useState({
    fullname: "",
    email: "",
    status: false,
  });

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = String(event.target.getAttribute("name"));
    const fieldValue = event.target.value;
    
    console.log(fieldName);
    console.log(fieldValue);

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const updateMember = async (e, member) => {
    e.preventDefault();
    
    const url = `/members/${member.id}`;
    const res =  await axios.put(url, {fullname: editFormData.fullname, email: editFormData.email, status: editFormData.status});

    cancelEditMember(e);
  }
    return (
        <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a full name..."
            name="fullname"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an email..."
            name="email"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td> 
          <input
            type="checkbox"
            name="status"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          {memberData.joinDate}
        </td>
        <td>
          <button type="submit" class ="btn-primary" onClick={(e) => updateMember(e, memberData)}>Save</button>
          <button type="button" class ="btn-primary" onClick={(e) => cancelEditMember(e)}>
            Cancel
          </button>
        </td>
      </tr>
    );
};

export default EditRow;
