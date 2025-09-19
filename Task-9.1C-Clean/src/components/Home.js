import React from 'react';
import { Container, Header, Button, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Container className="home-container">
      <Header as='h1' textAlign='center' className="welcome-header">
        Welcome to DEV@Deakin!
      </Header>
      
      <Message success>
        <Message.Header>Successfully Authenticated</Message.Header>
        <p>You have successfully logged in to your Dev@Deakin account.</p>
      </Message>
      
      <p className="welcome-text">
        This is your protected dashboard. You can only access this page when you're signed in.
        Use the "Sign Out" button in the header to log out and return to the login page.
      </p>
      
      <Button
        primary
        size="large"
        onClick={handleSignOut}
        className="logout-button"
      >
        Sign Out
      </Button>
    </Container>
  );
};

export default Home;