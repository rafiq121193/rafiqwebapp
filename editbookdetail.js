import React, {Component} from 'react';
import axios from 'axios';

class EditBookdetails extends Component{

    constructor(props){
        super(props);

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookDesc = this.onChangeBookDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            book_name: '',
            book_author: '',
            book_desc: ''

        }

    }

    onChangeBookName(e){
        this.setState({

            book_name: e.target.value
        
        })
    }

    onChangeBookAuthor(e){
        this.setState({

            book_author: e.target.value
        
        })
    }

    onChangeBookDesc(e){
        this.setState({

            book_desc: e.target.value
        
        })
    }

    onSubmit(e){
        e.preventDefault();

        const Book = {

            book_name: this.state.book_name,
            book_author: this.state.book_author,
            book_desc: this.state.book_desc
        };
        axios.post('http://localhost:5000/todos/update/'+this.props.match.params.id, Book)
            .then(res => console.log(res.data));
            this.props.history.push('/');
    } 
        componentDidMount(){

            axios.get('http://localhost:5000/todos/'+this.props.match.params.id)
                .then(response => {
                    this.setState({
                        book_name: response.data.book_name,
                        book_author: response.data.book_author,
                        book_desc: response.data.book_desc
                    })

                })
                .catch(function(error){
                    console.log(error)
                })
        }

    render(){
        return(
            <div style={{marginTop: 15}}>
                <h3>Update Book Details</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Book Name:</label>
                <input type="text" className="form-control"
                    value={this.state.book_name} 
                    onChange={this.onChangeBookName} />    
                </div>

                <div className="form-group">
                    <label>Book Description:</label>
                <input type="text" className="form-control"
                    value={this.state.book_desc} 
                    onChange={this.onChangeBookDesc} />    
                </div>

                <div className="form-group">
                    <label>Book Author:</label>
                <input type="text" className="form-control"
                    value={this.state.book_author} 
                    onChange={this.onChangeBookAuthor} />    
                </div>
                <div className="form-group">
                    <input type="submit" value="Update" onSubmit={this.onSubmit} className="btn btn-primary" />                     </div>
                
                </form>


            </div>
        );

    }
}

export default EditBookdetails;
