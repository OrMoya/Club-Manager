import React from "react";
import './MemberTable.css'

const ReadOnlyRow = ({memberData, removeMember, editMember, editMemberId}) => {
    return (
            <tr>
                <td>{memberData.fullName}</td>
                <td>{memberData.email}</td>
                <td>{memberData.status === true ? "active" : "inactive"}</td>
                <td>{memberData.joinDate}</td>
                <td><button class ="btn-delete" onClick={(e) => removeMember(e,memberData)}>Delete</button>
                <button class ="btn-primary" onClick={(e) => editMember(e,memberData,editMemberId)}>Edit</button></td>
            </tr>
    );
};

export default ReadOnlyRow;
