import React, { Component, Fragment } from "react";
import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditRow from "./EditRow";

export class MemberTable extends Component {
  static displayName = MemberTable.name;

  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = { memberData: [], loading: true, editMemberId: ""};
=======
    this.state = { memberData: [], loading: true, editMemberId: "" };
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
  }

  componentDidMount() {
    this.populateMemberTable();
  }

  removeMember = (e, member) => {
    e.preventDefault();

    const url = `/members/${member.id}`;

    axios
      .delete(url)
      .then((res) => {
        this.setState((previousState) => {
          return {
            memberData: previousState.memberData.filter(
              (m) => m.id !== member.id
            ),
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editMember = (e, member) => {
    this.setState({ editMemberId: member.id });
  };

  cancelEditMember = (e) => {
    this.setState({ editMemberId: null });
  };

  static renderMemberTable(
    memberData,
    removeMember,
    editMember,
    editMemberId,
    cancelEditMember
  ) {
    return (
<<<<<<< HEAD
      <form>
=======
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership Status</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memberData.map((memberData) => (
            <Fragment>
              {editMemberId === memberData.id ? (
                <EditRow
                  memberData={memberData}
                  cancelEditMember={cancelEditMember}
                />
              ) : (
                <ReadOnlyRow
                  memberData={memberData}
                  removeMember={removeMember}
                  editMember={editMember}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
<<<<<<< HEAD
      </form>
=======
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      MemberTable.renderMemberTable(
        this.state.memberData,
        this.removeMember,
        this.editMember,
        this.state.editMemberId,
<<<<<<< HEAD
        this.cancelEditMember,
        this.editMemberData
=======
        this.cancelEditMember
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
      )
    );

    return (
      <div>
        <h1 id="tableLabel">Member List</h1>
        {contents}
      </div>
    );
  }

  async populateMemberTable() {
    const response = await fetch("members");
    const data = await response.json();
    this.setState({ memberData: data, loading: false, editMemberId: "" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> f0bbaf4c4a1f9ad61693caf9efbfd39ae65e09a9
