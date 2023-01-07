// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

//  function EditUser() {
//   let navigate = useNavigate();

//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { name, username, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };


//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`https://www.mecallapi.com/api/users/${id}`, user);
//     navigate("/");
//   };


//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Email" className="form-label">
//                 E-mail
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your e-mail address"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default EditUser;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [fname, setnm] = useState('');
  const [username, setUsernm] = useState('');


  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.fname]: e.target.value });
  // };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.put(`http://localhost:3009/posts/${id}`, user);
  //   navigate("/");
  // };

  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:3009/posts/${id}`);
  //   setUser(result.data);
  // };

  const NameEditHandler=(e)=>{
    setnm(e.target.value)
  }
  
  const   UNameEditHandler=(e)=>{
    setUsernm(e.target.value)
  }
 const  EditHandler=(e)=>{
e.preventDefault();
const Editu=async()=>{
 
  const EditUser={
  fname:fname,
  username:username,
   
  }
  await axios.post(`http://localhost:3009/posts/${id}`,EditUser
    )
//
 }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e)=>{
                    e.preventDefault();
                    
                }} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={fname}
                onChange={NameEditHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={UNameEditHandler}
              />
            </div>
           
            <button type="submit" onClick={EditHandler} className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}







}