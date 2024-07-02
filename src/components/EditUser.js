import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/UserSlice';

function EditUser({user, ping, setPing}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch();
  
    const [etided, setetided] = useState({ 
      email: user.email,
      username: user.username,
      password: user.password,
      isAdmin: user.isAdmin
    });

    const handleStuff = () =>{
        dispatch(updateUser({id:user._id, etided}));        
        setPing(!ping);
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit User
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
                  placeholder={user?.email}
                  autoFocus
                  onChange={(e) => setetided({...etided, email : e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user?.username}
                  autoFocus
                  onChange={(e) => setetided({...etided, username : e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={user?.password}
                  onChange={(e) => setetided({...etided, password : e.target.value})}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleClose(); handleStuff();}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default EditUser