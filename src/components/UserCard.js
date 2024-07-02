import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/UserSlice';


function UserCard({user, ping, setPing}) {
	const dispatch = useDispatch();
  const handleStuff = () => {
    dispatch(deleteUser(user._id));
    const newValue = ping ? false : true;
    setPing(newValue);
  }
  return (
	<Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{user?.username}</Card.Title>
        <Card.Text>
          {user?.email}
        </Card.Text>
        <Button variant="danger" onClick={() => handleStuff()}>delete</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard