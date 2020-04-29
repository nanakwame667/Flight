import React,{useState} from 'react';

import {Form,Container,Modal,Button,Alert} from 'react-bootstrap';

import PhoneInput from 'react-phone-number-input';


function UserForm (props){
    const [validated, setValidated] = useState(false);
    const [formShow,setFormShow]  = useState(true);
    const [formShow1,setFormShow1]= useState(false);
    const [value, setValue] = useState();
    
   const twoFun=(event)=>{
        setFormShow(false);
        setFormShow1(true);
    }
    const twoFun1=(event)=>{
      setFormShow1(false);
      setFormShow(true);
  }
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
      fluid
    >
    
    <Modal.Header closeButton>
          <Modal.Title  style={{marginLeft:'130px',marginBottom:'10px',marginTop:'10px',fontSize:'30px'}} >Flight-Booky</Modal.Title>
          <a href="/admin/login" style={{marginLeft:'80px'}}>Admin?</a>
          </Modal.Header>
        <Modal.Body>
        <Alert show={formShow} style={{justifyContent:'center'}}>
        <Container style={{width:'500px',height:'515px'}} fluid>
        
        <Form variant="primary" noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
  <h3 style={{fontSize:'30px'}}>Hey!! Good to see you again</h3>
  <p style={{fontSize:'15px'}}>Sign in for member-only deals and access to your Trip <br/> details.</p><br/>
    <Form.Control required type="email" placeholder="Email" style={{width:'400px'}} size="lg" />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control required type="password" placeholder="Password" style={{width:'400px'}} size="lg"/>
    <Form.Control.Feedback type="invalid">
    Please enter a correct password
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" style={{display:'flex'}}>
  {['checkbox'].map((type) => (
    <div key={`custom-${type}`} className="mb-3">
      <Form.Check 
        custom
        type={type}
        id={`custom-${type}`}
        label={`Remember Me`}
      />
      </div>
      ))}
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
  <div style={{display:'flex',marginTop:'30px'}}>
  <p style={{marginTop:'5px'}}>Don't have an account?</p>
  <Button variant="outline-primary" size="md" style={{marginLeft:'140px'}}  onClick={twoFun}>Create Account</Button>
  </div>
  </Form>
  
        </Container>
        </Alert>
        <Alert show={formShow1} style={{justifyContent:'center'}}>
        <Container style={{width:'500px',height:'520px'}} fluid>
        <Form variant="primary" noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
  <h3 style={{fontSize:'30px'}}>Sign Up and Save</h3>
        <p style={{fontSize:'15px'}}>Create an account now for access to member-only deals.</p>
        <div style={{display:'flex'}}>
        <Form.Control required type="email" placeholder="FullName" style={{width:'200px'}} size="lg" /><br/>
        <PhoneInput
        style={{width:'200px',marginLeft:'10px'}}
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/></div>
        <br/>
    <Form.Control required type="email" placeholder="Email" style={{width:'400px'}} size="lg" />
    <Form.Text className="text-muted">
      Example: example@example.com
    </Form.Text>
    <Form.Control.Feedback type="invalid">
    Please enter a valid email address.
  </Form.Control.Feedback>
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control required type="password" placeholder="Password" style={{width:'400px'}} size="lg"/>
    <Form.Control.Feedback type="invalid">
    Please enter a correct password
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" style={{display:'flex'}}>
  {['checkbox'].map((type) => (
    <div key={`custom-${type}`} className="mb-3">
      <Form.Check 
        custom
        type={type}
        id={`custom-${type}`}
        label={`Yes,send me great deals and expert travel tips`}
      />
      </div>
      ))}
  </Form.Group>
  <Button variant="primary" type="submit" size="sm"style={{fontSize:'20px',width:'400px'}} >
    Create an Account
  </Button>
  <p style={{fontSize:'18px',color:'blue',marginTop:'10px',textAlign:'center',marginRight:'65px'}}>or</p>
  <Form.Group style={{display:'flex'}}>
<Button variant="outline-primary" size="sm" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'18px',width:'200px'}}>
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
  <div style={{display:'flex',marginTop:'20px'}}>
<p style={{marginTop:'5px'}}>Have an account?</p>
<Button variant="outline-primary" size="md" style={{marginLeft:'230px'}} onClick={twoFun1} >Sign In</Button>
</div>
  </Form>
        </Container>
        </Alert>
        </Modal.Body>
        </Modal>
       
        </>
    )
  }
  
  export default UserForm;