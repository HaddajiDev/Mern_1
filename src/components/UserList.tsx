import React from 'react'
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function UserList({users, ping, setPing} : any) { 
  
  return (
	<div>
    { users ?    
        users.map((user: any) => <UserCard user={user} ping={ping} setPing={setPing}/> ) : (<h1>No users</h1>)}
  </div>
  )
}

export default UserList