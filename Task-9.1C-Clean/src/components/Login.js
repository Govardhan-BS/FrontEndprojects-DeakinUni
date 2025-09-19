import React, { useState } from 'react';
import { Form, Button, Message, Container, Grid, Header } from 'semantic-ui-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Network error. Please check your internet connection.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
      } else if (error.code === 'auth/user-disabled') {
        setError('This account has been disabled. Please contact support.');
      } else {
        setError(`Login failed: ${error.message || 'Unknown error occurred'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Container className="login-container">
      <Grid centered>
        <Grid.Column width={6}>
          <div className="form-container">
            <Header as='h2' textAlign='center' className="form-header">
              Login to DEV@Deakin
            </Header>
            
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Field>
                <label>Your email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Field>
              
              <Form.Field>
                <label>Your password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Field>
              
              <Button
                type="submit"
                primary
                fluid
                size="large"
                loading={loading}
                className="login-button"
              >
                Login
              </Button>
            </Form>
            
            {error && (
              <Message negative>
                <p>{error}</p>
              </Message>
            )}
            
            <div className="signup-link">
              <Button
                basic
                color="blue"
                onClick={handleSignUpClick}
                className="signup-button"
              >
                Sign up
              </Button>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Login;