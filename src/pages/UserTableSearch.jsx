
// const UserTableSearch = () => {
//     const [users,setUsers]=useState([])
//     const [value,setValue]=useState('');
//     let [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         const getUsers=async()=>{
//             const response=await axios.get('https://www.melivecode.com/api/users')
//             console.log(response.data);   
//             setUsers(response.data)
//         setLoading(false)
//         }
//         getUsers();
//     },[])

// const InputHandler=(e)=>{
//     setValue(e.target.value)
// }
// const filteredUser=()=>{}
//   return (
//     <div>
//       <input onChange={InputHandler} type="text" placeholder='Search...'  className='form-control w-50 mx-auto my-3'/>
//    <UserList ulist={users} />
  
  
//     </div>
//   )
// }

// export default UserTableSearch
