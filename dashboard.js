import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
     
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(name, email) {
    this.setState(prevState => ({
      people: [...prevState.people, { name, email }]
    }));
  }

  componentDidMount() {
    this.getPeople();
   
  }

  getPeople() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ people: response }))
      .catch(error => console.log(error));
  }

  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

  render() {
    console.log(this.state);
   // console.log(this.state.people.length);
    
    return (
      <div className="container">
        <Form addPerson={this.addPerson} />
        <table className="table">
          <thead>
            <tr>
              <h4 >No.of records:{this.state.people.length}</h4>
            </tr>
            <tr>
              <th>Id</th>
              <th>Author Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>
                    <button onClick={this.deletePerson(person.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;