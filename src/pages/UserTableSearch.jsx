import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
const UserTableSearch = () => {
    const [users,setUsers]=useState([])
        const [value,setValue]=useState('');
        useEffect(()=>{
            const getUsers=async()=>{
                const response=await axios.get('http://localhost:3009/posts')
                console.log(response.data);   
                setUsers(response.data)
            }
            getUsers();
        },[])
    
    const InputHandler=(e)=>{
        setValue(e.target.value)
    }
    const filteredUser=users.filter(user=>user.fname.toLowerCase().includes(value.toLocaleLowerCase()))
    console.log(filteredUser)
    
      return (
        <div className='container'>
          <input onChange={InputHandler} type="text" placeholder='Search...'  className='form-control w-50 mx-auto my-3'/> 

          <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((user, index) => (
              <tr key={user.id}>
              
                <td >{user.id}</td>
                <td>{
                    <img
                    src={`https://www.melivecode.com/users/${user.id}.png`}
                    width={50}
                    alt='Player'/>
                }
                </td>

                <td>{user.fname} { user.lname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )
    
}

export default UserTableSearch
