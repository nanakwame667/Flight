import React,{useState} from 'react';

import {Form,Container,Modal,Button} from 'react-bootstrap';

import SignupForm from './SignUpForm';

function LoginForm (props){
    const [validated, setValidated] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return(
      <>
      <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
    <Modal.Header closeButton>
          <Modal.Title  style={{marginLeft:'130px',marginBottom:'40px',marginTop:'10px',fontSize:'30px'}} >Flight-Booky</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 style={{marginTop:'30px',fontSize:'30px', marginLeft:'12px'}}>Hey!! Good to see you again</h3>
        <p style={{fontSize:'15px',marginLeft:'12px'}}>Sign in for member-only deals and access to your Trip details.</p>
        <Container style={{width:'500px',height:'400px'}} fluid>
        <Form variant="primary" noValidate validated={validated} onSubmit={handleSubmit}style={{marginTop:'30px'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontSize:"20px"}}>Email</Form.Label>
    <Form.Control required type="email" placeholder="Enter email" style={{width:'400px'}} size="lg" />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" style={{width:'400px'}} size="lg"/>
    <Form.Control.Feedback type="invalid">
    Please enter a correct password
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" style={{display:'flex'}}>
    <Form.Check type="checkbox" label="Remember Me"/>
    <a href="#password" style={{marginLeft:'120px'}}>Forgot Password?</a>
  </Form.Group>
  <Button variant="primary" type="submit" size="sm"style={{fontSize:'20px',width:'400px'}} >
    Sign In
  </Button>
  <p style={{fontSize:'18px',color:'blue',marginTop:'15px',textAlign:'center',marginRight:'65px'}}>or</p>
  <Form.Group style={{display:'flex'}}>
  <Button variant="outline-primary" size="lg" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'18px',width:'200px'}}>
  <img
  src={require('../../Images/google-icon.webp')}
  alt="Google"
  width="20px"
  height="20px"
  style={{marginRight:'50px'}}
  />
  Google
  </Button>
  <Button variant="outline-primary" size="lg" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'18px',marginLeft:'15px',width:'200px'}}>
  <img
  src={require('../../Images/facebook-icon.png')}
  alt="Google"
  width="30px"
  height="30px"
  style={{marginRight:'50px'}}
  />
  Facebook
  </Button>
  </Form.Group>
  </Form>
        </Container>
        </Modal.Body>
        <Modal.Footer>
        <p>Don't have an account?</p>
        <Button variant="outline-primary" size="md" style={{marginLeft:'155px'}} onClick={()=>setModalShow(true)}>Create Account</Button>
        </Modal.Footer>
        </Modal>
        <SignupForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </>
    )
  }
  
  export default LoginForm;