import React from 'react'
import Card from 'react-bootstrap/Card';


const UserList = (props) => {
  return (
    
    <div className='d-flex all-card'>
      {
         props.ulist.map(u=>{
            return(
                    <div className='cards' key={u.id}>
                        <Card className='singlecard' style={{ width: '19rem' ,display:'flex'}}>
                      <Card.Img variant="top" src={u.avatar} />
                      <Card.Body>
                        <Card.Title>{u.fname} {u.lname}</Card.Title>
                        <Card.Text>
                         {u.username}
                           </Card.Text>
                         </Card.Body>
                    </Card>
                    </div>
                  
            )
         })
    
      }
      </div>
  )
}

export default UserList;