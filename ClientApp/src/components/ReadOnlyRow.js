import React from "react";

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
};

export default ReadOnlyRow;