import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {Button} from 'react-bootstrap';

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
       
        <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" />
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
    )
}

export default LoginForm;