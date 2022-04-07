import React from "react";
import axios from "axios";
import "./MemberTable.css";

class AddRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      status: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(name, value);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = `/members`;
    const response = axios
      .post(url, {
        fullName: this.state.fullName,
        email: this.state.email,
        status: this.state.status,
      })
      .then((res) => {
          console.log("in then")
        this.props.rerenderTable();
      })
      .catch((error) => console.log(error.response));
    this.setState({ fullname: "", email: "", status: false });
  }

  render() {
    return (
      <div>
        <h2>Add a Member</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            required="required"
            placeholder="Enter an email addres..."
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="status"
            required="required"
            placeholder="Has this member paid for membership?"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddRow;
