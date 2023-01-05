
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
    const [name, setName] = useState('');
    
    const [username, setUsername] = useState('');
  
  const NameHandler=(e)=>{
    setName (e.target.value)
  }
  const emailHandler=(e)=>{
    setUsername (e.target.value)
  }
const UserHandler=(e)=>{
    e.preventDefault();
const addUser=async()=>{
    const newUser={
    fname:name,
    username:username,
    avatar: `https://www.melivecode.com/users/1.png`
    
    }
    await axios.post('http://localhost:3009/posts',newUser)

}
addUser();
}    
    return (
        <div className='container '>
            <div className="row mt-5 w-50 mx-auto ">
                <div className='text-center'>
                    <h1> Add User Form</h1>
                </div>
                <form action=""onSubmit={(e)=>{
                    e.preventDefault();
                    
                }} >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label ">
                    Name
                    </label>
                    <input
                        type="text"
                        className="form-control my-2 py-3"
                        id="exampleFormControlInput1"   
                        placeholder='Name'                    
                        // value={formData.email}
                        onChange={NameHandler}
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        onChange={emailHandler}
                        // value={formData.email}
                        // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="mb-3 text-center">
                    <button  className="btn btn-success"
                    type='submit'
                        onClick={UserHandler} >Add User</button>
                </div>
                </form>
 
            </div>
        </div>
    )
}

export default AddUser