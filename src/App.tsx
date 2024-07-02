import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/UserSlice';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser';


function App() {
  const dispatch : any = useDispatch();
  const [ping, setPing] = useState(false);
  useEffect(() => {
    dispatch(getUser());    
  }, [ping]);

  const users: any = useSelector((state: any) => state.user.userList);
  

  return (
    <div>
      <AddUser ping={ping} setPing={setPing}/>
      <UserList users={users} ping={ping} setPing={setPing}/>
    </div>
  );
}

export default App;
