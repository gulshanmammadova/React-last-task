import './App.css';
import Users from './components/Users';
import {BrowserRouter,Routes,Route  } from "react-router-dom";
import AdminChecker from './components/AdminChecker';
import HeaderPart from './components/HeaderPart.jsx';
import UserTableSearch from './pages/UserTableSearch';
import AdminPanel from './pages/AdminPanel.jsx'
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <HeaderPart/>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/admin' element={<AdminChecker/>}/>

        <Route path='/filtereduser' element={<UserTableSearch/>}/> 
        
        {/* <Route path='/edituser' element={<EditUser/>}/> */}
        <Route path='/adduser' element={<AddUser/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
