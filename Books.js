import React from 'react'
import '../App.css';

const Books = () => {
    return (
        <div>
            <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Book Title:</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Book Author:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Description:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>   
        
        </form>
    </div>
</div>
    </div>
    )
}

export default Books;
