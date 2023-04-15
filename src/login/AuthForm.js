import React, {useState} from 'react';
import {Alert, Button, Card, Form} from 'react-bootstrap';
import './AuthForm.css'

const logoImage = require('./logo1.png');
const LoginForm = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add login logic here
        setShowError(true);
    };

    return (
        <Card>
            <Card.Header style={{backgroundColor:"rebeccapurple", borderBottomColor:"rebeccapurple"}}>
                    <img src={logoImage}   style={{width: "150px", height: "50px"}} />
            </Card.Header>
            <Card.Body className="card-customization">
                <h2 style={{textAlign: "center", color: "white"}}>Login</h2>
                {showError && <Alert variant="danger">Invalid email or password.</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email" style={{ marginBottom: "40px" }}>
                        <Form.Label class="white-text">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password"style={{ marginBottom: "40px" }}>
                        <Form.Label class="white-text">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="dark" type="submit">
                            Login
                        </Button>
                        <br/>
                        <Button variant="link" style={{ color: "black" }} onClick={onSwitchToSignUp}>
                            New User? Create Account
                        </Button>
                        <Button variant="link" style={{ color: "lightgray" }}>
                            By signing in or creating an account, you acknowledge and accept our privacy policy.
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

const SignUpForm = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add sign up logic here
        setShowError(true);
    };

    return (
        <Card>
            <Card.Header style={{backgroundColor:"rebeccapurple", borderBottomColor:"rebeccapurple"}}>
                <img src={logoImage} alt ="Logo" style={{width: "150px", height: "60px"}} />
            </Card.Header>
            <Card.Body className="card-customization">
                <h2 style={{textAlign: "center", color: "white"}}>Sign Up</h2>
                {showError && <Alert variant="danger">Passwords do not match.</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email" style={{ marginBottom: "30px" }}>
                        <Form.Label class="white-text">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password" style={{ marginBottom: "30px" }}>
                        <Form.Label class="white-text">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" style={{ marginBottom: "30px" }}>
                        <Form.Label class="white-text">Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group controlId="userType" className="d-flex justify-content-between radio-group" style={{ marginBottom: "20px" }}>
                        <Form.Check type="radio" label="Seller" name="userType" id="seller" className="mx-2 white-text" />
                        <Form.Check type="radio" label="Buyer" name="userType" id="buyer" className="mx-2 white-text"  />
                        <Form.Check type="radio" label="Admin" name="userType" id="admin" className="ml-2 white-text" />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="dark" type="submit">
                            Sign Up
                        </Button>
                        <br/>
                        <Button variant="link" style={{ color: "black" }} onClick={onSwitchToLogin}>
                            Already have an account? Login here
                        </Button>
                        <Button variant="link" style={{ color: "lightgray" }}>
                            By signing in or creating an account, you acknowledge and accept our privacy policy.
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
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
        <div className="container auth-container" style={{height:"80vh"}}>
        <div className="col-md-6 mx-auto">
            {displayLoginForm ? (
                <LoginForm onSwitchToSignUp={handleSwitchToSignUp} />
            ) :
             (
                 <SignUpForm onSwitchToLogin={handleSwitchToLogin} />
             )}
        </div>

        </div>
    );
};

export default AuthForm;

