import React,{useState} from 'react';

import {Form,Container,Modal,Button,Row,Col} from 'react-bootstrap';

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
    <Modal.Header closeButton>
          <Modal.Title  style={{marginLeft:'150px'}} >Flight-Booky</Modal.Title>
        </Modal.Header>
        <Container style={{width:'400px',height:'600px'}} fluid>
        <Form variant="primary" noValidate validated={validated} onSubmit={handleSubmit}style={{justifyContent:'center',alignItems:'center',marginTop:'100px'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" style={{width:'400px'}} size="lg" />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" style={{width:'400px'}} size="lg"/>
    <Form.Control.Feedback type="invalid">
    Please enter a correct password
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit" size="lg" block>
    Sign In
  </Button>
  </Form>
        </Container>
        <Modal.Footer>
        <Row>
        <Col style={{marginRight:'100px'}}>Do you have an account?</Col>
        <Col>
        <Button>Create account</Button>
        </Col>
        </Row>
        </Modal.Footer>
        </Modal>
    )
  }
  
  export default LoginForm;