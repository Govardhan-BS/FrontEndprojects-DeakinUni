import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Container className="home-container">
      <Header as='h1' textAlign='center' className="welcome-header">
        Welcome to DEV@Deakin!
      </Header>
      <p className="welcome-text">
        You have successfully logged in to your account.
      </p>
      <Button
        primary
        size="large"
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </Button>
    </Container>
  );
};

export default Home;
