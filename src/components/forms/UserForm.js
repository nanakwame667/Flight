import React,{useState, useContext} from 'react';

import {Form,Container,Modal,Button,Alert} from 'react-bootstrap';
import AppContext from '../../config/app-context';


const { BASE_API_URL } = require('../../utils/constants');
const axiosRestClient = require('axios-rest-client').default;

function UserForm (props){

    let context = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setError] = useState('');
    const [isValid, setValidated] = useState(false);
    const [isLogin,isShowLogin] = useState(true);
    const [isSignup,isShowSignup]= useState(false);
    
    const showSignupModal=()=>{
      setError('');
      isShowLogin(false);
      isShowSignup(true);
    }
    const showLoginModal=()=>{
      setError('');
      isShowSignup(false);
      isShowLogin(true);
    }
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        // setValidated(false);
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        //  setValidated(true);
         if (isLogin){
          const api = axiosRestClient({baseUrl: BASE_API_URL+'user/'});
          api.auth.create({
            email: email.trim(),
            password: password.trim()
          }).then(({data})=>{
            if (data.status === 'success'){
              context.updateState({user: data.result.data.user, token: data.result.data.token});
              props.showModal(false);
              console.log(context);
            }
            else{
              console.log(data.result); 
              setError(data.result.message);
            }
          }).catch(err=>{
            console.log(err);
          });
        }
        else{
          const api = axiosRestClient({baseUrl: BASE_API_URL});
          let names = fullname.trim().split(' ');
          api.user.create({
            email: email.trim(),
            password: password.trim(),
            phone: phone.trim(),
            firstname: names[0],
            lastname: names.length > 1 ? names[1] : '',
            othername: names.length > 2 ? names.slice(2).join(' ') :  ''
          }).then(({data})=>{
            if (data.status === 'success'){
              showLoginModal();
            }
            else{
              console.log(data.result);
              setError(data.result.error.errors[0].message);
            }
          }).catch(err=>{
            console.log(err);
          });
        }

      }
    };


    return(
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered fluid="true">
  
        <Modal.Header closeButton>
          <Modal.Title  style={{marginLeft:'130px',marginBottom:'20px',marginTop:'10px',fontSize:'30px'}} >Flight-Booky</Modal.Title>
          <a href="/admin/login" onClick={ () => {props.showModal(false)} } style={{marginLeft:'80px'}}>Admin?</a>
        </Modal.Header>
        <Modal.Body>
          <Alert show={isLogin} style={{justifyContent:'center'}}>
            <Container style={{width:'500px',height:'max-content'}} fluid="true">
                { errorMessage && <p className="lead text-danger text-center">{errorMessage}</p> }
                <h3 style={{fontSize:'30px'}}>Hey!! Good to see you again</h3>
                <p style={{fontSize:'15px'}}>Sign in for member-only deals and access to your Trip <br/> details.</p>
                
                <Form variant="primary" noValidate validated={isValid} onSubmit={handleSubmit} style={{marginTop:'10px'}}>
                  <Form.Group controlId="formBasicEmail">
                
                    <Form.Label style={{fontSize:"20px"}}>Email</Form.Label>
                    <Form.Control value={email}  onChange={ (e)=>{ setEmail(e.target.value) } } 
                    required feedback="please enter an email address"
                    type="email" placeholder="Enter email" style={{width:'400px'}} size="lg" />
                    <Form.Text className="text-muted">
                      Example: example@example.com  
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
                    <Form.Control value={password} onChange={ (e)=>{ setPassword(e.target.value) } } required type="password" placeholder="Password" style={{width:'400px'}} size="lg"/>
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
                  <Button variant="outline-primary" size="md" style={{marginLeft:'140px'}}  onClick={showSignupModal}>Create Account</Button>
                  </div>
                </Form>
                  
            </Container>
          </Alert>
          
          <Alert show={isSignup} style={{justifyContent:'center'}}>
         
          <Container style={{width:'500px',height:'max-content'}} fluid="true">
           { errorMessage && <p className="lead text-danger text-center">{errorMessage}</p> }
            <Form variant="primary" noValidate validated={isValid} onSubmit={handleSubmit}style={{marginTop:'30px'}}>

            <h3 style={{marginTop:'30px',fontSize:'30px'}}>Sign Up and Save</h3>
            <p style={{fontSize:'15px'}}>Create an account now for access to member-only deals.</p>
            
            <Form.Group controlId="formBasicFullname">
              <Form.Label style={{fontSize:"20px"}}>Fullname</Form.Label>
              <Form.Control required
              value={fullname}  onChange={ (e)=>{ setFullname(e.target.value) } } placeholder="Fullname" style={{width:'400px'}} size="lg"/>
              <Form.Text className="text-muted">
                Format: firstname lastname other-names
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                Please enter your fullname
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{fontSize:"20px"}}>Email</Form.Label>
              <Form.Control value={email}  onChange={ (e)=>{ setEmail(e.target.value) } } 
              required feedback="please enter an email address"
              type="email" placeholder="Enter email" style={{width:'400px'}} size="lg" />
              <Form.Text className="text-muted">
                Example: example@example.com
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="formBasicPhone">
              <Form.Label style={{fontSize:"20px"}}>Phone</Form.Label>
              <Form.Control  value={phone} required feedback="please enter your phone number" type="phone"
              onChange={ (e)=>{ setPhone(e.target.value) } } placeholder="Phone" style={{width:'400px'}} size="lg"/>
              <Form.Text className="text-muted">
                Example: 0240000000
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                Please enter a correct phone number
              </Form.Control.Feedback>
            </Form.Group>

          
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
              <Form.Control required feedback="please enter a password" min="8" value={password}  onChange={ (e)=>{ setPassword(e.target.value) } } placeholder="Password" style={{width:'400px'}} size="lg"/>
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
            <p style={{fontSize:'18px',color:'blue',marginTop:'15px',textAlign:'center',marginRight:'65px'}}>or</p>
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
            <div style={{display:'flex',marginTop:'30px'}}>
          <p style={{marginTop:'5px'}}>Have an account?</p>
          <Button variant="outline-primary" size="md" style={{marginLeft:'230px'}} onClick={showLoginModal} >Sign In</Button>
          </div>
            </Form>
          </Container>
        </Alert>
        </Modal.Body>
        </Modal>
    )
  }
  
  export default UserForm;