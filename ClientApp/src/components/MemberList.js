import React,{ Component } from "react";
import axios from 'axios';
import ReadOnlyRow from "./ReadOnlyRow";

export class MemberList extends Component {
    static displayName = MemberList.name;

    constructor(props){
        super(props);
        this.state = { memberData: [], loading: true};
    }

    componentDidMount(){
        this.populateMemberTable();
    }

    removeMember = (e, member) => {
        e.preventDefault();
    
        const url = `/members/${member.id}`;
    
        axios
          .delete(url)
          .then(res => {
            this.setState(previousState => {
              return {
                memberData: previousState.memberData.filter(m => m.id !== member.id)
              };
            });
          })
          .catch(err => {
            console.log(err);
          });
          };

    static renderMemberTable(memberData, removeMember){
        return(
            <table className='table table-striped' aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {memberData.map(memberData =>
                        <ReadOnlyRow memberData={memberData} removeMember={removeMember}/>
                        )}
                </tbody>
            </table>
        );
    }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : MemberList.renderMemberTable(this.state.memberData, this.removeMember);

        return(
            <div>
                <h1 id="tableLabel" >Club Members</h1>
                {contents}
            </div>
        )
    }

    async populateMemberTable(){
        const response = await fetch('members');
        const data = await response.json();
        this.setState({memberData: data, loading: false});
    }
}