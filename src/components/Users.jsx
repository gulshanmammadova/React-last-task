import axios from 'axios'
import { useEffect,useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import UserList from './UserList';
const Users = () => {

    const [users,setUsers]=useState([])
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getUsers=async()=>{
            const response=await axios.get('http://localhost:3009/posts')
            console.log(response.data);   
            setUsers(response.data)
        setLoading(false)
        }
        getUsers();
    },[])
  return (
   <div>
    {
         loading ? 
         <div className='loadier'>
        <HashLoader
    color="#E94057"
    cssOverride={{
    }}
    loading
    />
    </div>
    :<UserList ulist={users}/>  
    
    }
   </div>
)
}

export default Users;

