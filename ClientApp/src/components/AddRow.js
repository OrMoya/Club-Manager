import React, {useState} from "react";
import axios from "axios";
import './MemberTable.css'

const EditRow = ({addMember}) => {

  const [addFormData, setAddFormData] = useState({
    fullname: "",
    email: "",
    status: false,
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = String(event.target.getAttribute("name"));
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const updateMember = async (e, member) => {
    e.preventDefault();
    
    const url = `/members/${member.id}`;
    const res =  await axios.post(url, {fullname: addFormData.fullname, email: addFormData.email, status: addFormData.status});
  }
    return (
        <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name"
            name="fullname"
            onChange={handleAddFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an email"
            name="email"
            onChange={handleAddFormChange}
          ></input>
        </td>
        <td> 
          <input
            type="checkbox"
            //checked={memberData.status}
            name="status"
            // value={memberData.status}
            onChange={handleAddFormChange}
          ></input>
        </td>
      </tr>
    );
};

export default EditRow;
