import React,{useState} from 'react';

import {Form,Container,Modal,Button} from 'react-bootstrap';

function LoginForm (props){
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return(
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
        <Container style={{width:'400px',height:'600px'}} fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}style={{justifyContent:'center',alignItems:'center',marginTop:'60px'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" style={{width:'400px'}} />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" style={{width:'400px'}}/>
    <Form.Control.Feedback type="invalid">
    Please enter a correct password
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign In
  </Button>
  </Form>
        </Container>
        </Modal>
    )
  }
  
  export default LoginForm;