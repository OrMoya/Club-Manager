import React from "react";

<<<<<<< HEAD
const ReadOnlyRow = ({memberData, removeMember, editMember, editMemberId}) => {
    return (
            <tr>
                <td>{memberData.fullName}</td>
                <td>{memberData.email}</td>
                <td>{memberData.status === true ? "active" : "inactive"}</td>
                <td>{memberData.joinDate}</td>
                <td><button onClick={(e) => removeMember(e,memberData)}>Delete</button>
                <button onClick={(e) => editMember(e,memberData,editMemberId)}>Edit</button></td>
            </tr>
    );
=======
const ReadOnlyRow = ({
  memberData,
  removeMember,
  editMember,
  editMemberId,
}) => {
  return (
    <tr>
      <td>{memberData.name}</td>
      <td>{memberData.email}</td>
      <td>{memberData.status === true ? "active" : "inactive"}</td>
      <td>{memberData.joinDate}</td>
      <td>
        <button onClick={(e) => removeMember(e, memberData)}>Delete</button>
        <button onClick={(e) => editMember(e, memberData, editMemberId)}>
          Edit
        </button>
      </td>
    </tr>
  );
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
};

export default ReadOnlyRow;
