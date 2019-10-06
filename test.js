import React,{ Fragment, useState } from 'react'
import Button from '@material-ui/core/Button';
import './App.css';

const Name = () => {

  const [formData, setFormData] = useState({

    title: '',
    authorname: '',
    description: ''

  });

  const { title, authorname,description} = formData;
    
  const onChange = e => setFormData({ 
    ...formData, 
    [e.target.name]: e.target.value });
 
  const onSubmit = e => {
    e.preventDefault();
    if(title){
      console.log("please enter a title");
    }else{

      console.log(formData);
    }

  }
  
    return (
      <Fragment>
    <div id="main-registration-container">
     <div id="register">
        <h3>Add Book To Stock</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {e => onSubmit(e)} >
        <label>Book Title:</label>
        <input type="text" name="title" value={title} onChange={e => onChange (e)} required />
      
        <label>Book Author:</label>
        <input type="text" name="authorname" value={authorname} onChange={e => onChange (e)}  />
     
        <label>Book Description:</label>
        <input type="text" name="description" value={description} onChange={e => onChange (e)}   />
        
        <br/>
            <div className="App">
           <Button variant="contained" color="primary" size="small" type="submit">
        SUBMIT
        </Button>  <br />  
        </div>
        </form>
    </div>
</div>
</Fragment>
      );
  }



export default Name;
