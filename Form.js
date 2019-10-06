import React, { Component } from "react";
import './App.css';


class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form  = event.target;
    const email = form.elements["email"].value;
    const name  = form.elements["name"].value;
    const desc  = form.elements["desc"].value;
    this.props.addPerson(name, email,desc);
    form.reset();
  }

  render() {
    return (  
        <div id="main-registration-container">
     <div id="register">
     <h3>Add Book To Stock</h3>
      <form method="POST" autocomplete="off" onSubmit={this.formSubmit}>
        <input
          id="name"
          type="text"
          defaultValue=""
          placeholder="Book Title..."
        />
        <input
          id="email"
          type="text"
          defaultValue=""
          placeholder="Author Name..."
        />
        <input 
          id="desc"
          type="text"
          placeholder="Description.."
          /> 
        <input type="submit" value="submit" />
      </form>
      </div>
      </div>
    );
  }
}

export default Form;