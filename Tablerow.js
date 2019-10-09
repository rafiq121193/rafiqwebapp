import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.post('http://localhost:5000/todos/delete/'+this.props.todo._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.todo.book_name}
          </td>
          <td>
            {this.props.todo.book_author}
          </td>
          <td>
            {this.props.todo.book_desc}
          </td>
          <td>
            <Link to={"/edit/"+this.props.todo._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
