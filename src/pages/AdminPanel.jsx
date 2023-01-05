// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import AddUser from "../components/AddUser";

// export default function AdminPanel() {
//   const [users, setUsers] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("https://www.melivecode.com/api/users");
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`https://www.melivecode.com/api/users/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <Link to={<AddUser/>}>Add User</Link>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Id</th>
//               <th scope="col">Image</th>
//               <th scope="col">Name</th>
//               <th scope="col">Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, id) => (
//               <tr>
//                 <th scope="row" key={id}>
//                   {id }
//                 </th>
//                 <td>{user.avatar}</td>
//                 <td>{user.fname}</td>
//                 <td>{user.username}</td>
//                 <td>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import AddStyle from '../Style/AddStyle.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddUser from "../components/AddUser";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   loadUsers();
  // }, []);
  
  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = async () => {
    const result = await axios.get("http://localhost:3009/posts");
    setUsers(result.data);
  };



//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3009/posts");
//     setUsers(result.data);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:3009/posts/${id}`);
//     loadUsers();
//   };
// const DeleteHandler=(id)=>{
//   const deleteUser=async()=>{
//     await axios.delete(`http://localhost:3009/posts/${id}`)
//   }
//   deleteUser()
// }

  return (
    <div className="container tablecls mt-5">
      <div className="my-5 py-5  bos "></div>
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

                <td>{user.fname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button onClick={async()=>{
             await axios.delete (`http://localhost:3015/posts/${user.id}`)
             GetUsers();}}
           className='btn btn-danger' >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}