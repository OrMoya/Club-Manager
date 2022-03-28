import React from "react";

const ReadOnlyRow = ({memberData, removeMember}) => {
    return (
            <tr>
                <td>{memberData.name}</td>
                <td>{memberData.email}</td>
                <td>{memberData.status === true ? "active" : "inactive"}</td>
                <td>{memberData.joinDate}</td>
                <td><button onClick={(e) => removeMember(e,memberData)}>Delete</button></td>
            </tr>
    );
};

export default ReadOnlyRow;