import React, {useEffect, useState} from 'react';
import {Alert, Button, Card, Form} from 'react-bootstrap';
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";
import {CreateUserThunk, LogInThunk} from "../Services/Users-Thunks.js";
import {useNavigate} from "react-router";

const logoImage = require('./logo1.png');

const LoginForm = ({onSwitchToSignUp}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const {login} = useSelector(state => state.UserLogin);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch((LogInThunk({Username: email, Password: password})));
    };

    useEffect(() => {

        if (login) {
            navigate('/');
        } else {
            setShowError(false);
        }
    }, [login]);

    return (

        <div>

            <div>

                <Card>
                    <Card.Header
                        style={{backgroundColor: "rebeccapurple", borderBottomColor: "rebeccapurple"}}>
                        <img src={logoImage} style={{width: "150px", height: "50px"}} alt = "logo img"/>
                    </Card.Header>
                    <Card.Body className="card-customization">
                        <h2 style={{textAlign: "center", color: "white"}}>Login</h2>
                        {showError && <Alert variant="danger">Invalid email or password.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email" style={{marginBottom: "40px"}}>
                                <Form.Label class="white-text">UserName</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="password" style={{marginBottom: "40px"}}>
                                <Form.Label class="white-text">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="dark" type="submit">
                                    Login
                                </Button>
                                <br/>
                                <Button variant="link" style={{color: "black"}}
                                        onClick={onSwitchToSignUp}>
                                    New User? Create Account
                                </Button>
                                <Button variant="link" style={{color: "lightgray"}}>
                                    By signing in or creating an account, you acknowledge and accept our
                                    privacy policy.
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

            </div>

        </div>



    );
};

const SignUpForm = ({onSwitchToLogin}) => {

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [Location, setLocation] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Username, setUsername] = useState('');
    const [Image, setImage] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [Role, setRole] = useState('');

    const [showError, setShowError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newuser =
            {
                FirstName: FirstName,
                LastName: LastName,
                Email: email,
                Location: Location,
                Username: Username,
                Image: Image,
                Password:password,
                Role: Role
            }

       dispatch(CreateUserThunk(newuser));
        navigate('/');

    };

    const callfun = ( Role ) =>
    {
        setRole(Role);
    }

    return (

        <div>

            <div>

                <Card>
                    <Card.Header
                        style={{backgroundColor: "rebeccapurple", borderBottomColor: "rebeccapurple"}}>
                        <img src={logoImage} alt="Logo" style={{width: "150px", height: "60px"}}/>
                    </Card.Header>
                    <Card.Body className="card-customization">
                        <h2 style={{textAlign: "center", color: "white"}}>Sign Up</h2>
                        {showError && <Alert variant="danger">Passwords do not match.</Alert>}


                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">FirstName</Form.Label>
                                <Form.Control type="text" placeholder="Enter FirstName"
                                              value={FirstName}
                                              onChange={(e) => setFirstName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">LastName</Form.Label>
                                <Form.Control type="text" placeholder="Enter LastName" value={LastName}
                                              onChange={(e) => setLastName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Location" value={Location}
                                              onChange={(e) => setLocation(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Phone Number</Form.Label>
                                <Form.Control type="Number" placeholder="Enter email"
                                              value={PhoneNumber}
                                              onChange={(e) => setPhoneNumber(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" value={Username}
                                              onChange={(e) => setUsername(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="email" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image" value={Image}
                                              onChange={(e) => setImage(e.target.value)}/>
                            </Form.Group>


                            <Form.Group controlId="password" style={{marginBottom: "10px"}}>
                                <Form.Label class="white-text">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            {/* <Form.Group controlId="confirmPassword" style={{ marginBottom: "10px" }}>
                            <Form.Label class="white-text">Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>*/}

                            <Form.Group controlId="userType" className="d-flex justify-content-between radio-group"   style={{ marginBottom: "20px" }}>
                                <Form.Check type="radio" label="Seller" name="userType" id="seller" value={Role} onClick={()=>{callfun('Seller')}} className="mx-2 white-text" />
                                <Form.Check type="radio" label="Buyer" name="userType" id="buyer" value={Role} onClick={()=>{callfun('Buyer')}} className="mx-2 white-text"  />
                                <Form.Check type="radio" label="Admin" name="userType" id="admin" value={Role} onClick={()=>{callfun('Admin')}} className="ml-2 white-text" />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="dark" type="submit">
                                    Sign Up
                                </Button>
                                <br/>
                                <Button variant="link" style={{color: "black"}}
                                        onClick={onSwitchToLogin}>
                                    Already have an account? Login here
                                </Button>
                                <Button variant="link" style={{color: "lightgray"}}>
                                    By signing in or creating an account, you acknowledge and accept our
                                    privacy policy.
                                </Button>
                            </div>

                        </Form>

                    </Card.Body>
                </Card>
            </div>

        </div>

    );
};

const AuthForm = () => {

    const [displayLoginForm, setDisplayLoginForm] = useState(true);

    const handleSwitchToSignUp = () => {
        setDisplayLoginForm(false);
    };

    const handleSwitchToLogin = () => {
        setDisplayLoginForm(true);
    };


    return (
        <div className="container auth-container" style={{height: "80vh"}}>
            <div className="col-md-6 mx-auto">
                {displayLoginForm ? (

                                      <LoginForm onSwitchToSignUp={handleSwitchToSignUp}/>
                                  ) :
                 (
                     <SignUpForm onSwitchToLogin={handleSwitchToLogin}/>
                 )}
            </div>

        </div>
    );
};

export default AuthForm;

