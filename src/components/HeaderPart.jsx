import React from 'react'
import { Link } from "react-router-dom";
const HeaderPart = () => {
  return (
     <header>
        <div className="container ">
           <div className=" links row d-flex align-self-center align-items-center">
              <div className="left col-lg-2 col-3 ">
                 <Link to='/'>Info.az</Link>
              </div>
              <div className="right text-end col-lg-10  col-9 ">
              <Link to='/'>Home</Link>
              <Link to='/filtereduser'>Search</Link>
                 <Link to='/admin'>Admin Panel</Link>
                    </div>
           </div>
        </div>
     </header>

  )
}

export default HeaderPart
