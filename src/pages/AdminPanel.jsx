
import AddStyle from '../Style/AddStyle.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddUser from "../components/AddUser";
import toast, { Toaster } from 'react-hot-toast';
export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  const notifydelete = () =>toast.error("User Deleted...!");
  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = async () => {
    const result = await axios.get("http://localhost:3009/posts");
    setUsers(result.data);
    notifydelete();

  };

  return (
    <div className="container tablecls mt-5">
      <div className="my-5 py-5  bos ">
      </div>
      <div className="alltable  ">
       <div className='addbtn'> 
       <Link to='/adduser'> <button className="btn  btn-primary  my-5 ">ADD</button>
        </Link>
       </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                <td>
                
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={async()=>{
             await axios.delete (`http://localhost:3009/posts/${user.id}`)
             GetUsers();}}
           className='btn btn-danger' >Delete</button>
           <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}