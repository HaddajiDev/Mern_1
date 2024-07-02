import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/UserSlice';

function AddUser({ping, setPing}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({ 
    email: '',
    username: '',
    password: '',
    isAdmin: false
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setNewUser({...newUser, email : e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
                onChange={(e) => setNewUser({...newUser, username : e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => setNewUser({...newUser, password : e.target.value})}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); dispatch(addUser(newUser)); setPing(!ping)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser