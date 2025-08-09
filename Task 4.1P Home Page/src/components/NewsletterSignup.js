import React, { useState } from 'react';
import { Container, Input, Button, Message } from 'semantic-ui-react';
import EmailService from '../services/emailService';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    setError('');
    setIsLoading(true);

    try {
      if (!email) {
        setError('Please enter your email address');
        return;
      }
      
      if (!EmailService.validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }
      
      // Send welcome email using EmailService
      await EmailService.sendWelcomeEmail(email);
      
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
      
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
      console.error('Email subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <Container className="newsletter-signup">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        </div>
        <div className="newsletter-form">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="email-input"
            size='large'
            error={!!error}
            disabled={isLoading}
          />
          <Button 
            primary 
            size='large' 
            onClick={handleSubscribe}
            className="subscribe-button"
            loading={isLoading}
            disabled={isLoading}
          >
            Subscribe
          </Button>
        </div>
      </div>
      
      {error && (
        <Message negative className="error-message">
          <Message.Header>Subscription Error</Message.Header>
          <p>{error}</p>
        </Message>
      )}
      
      {isSubscribed && (
        <Message positive className="success-message">
          <Message.Header>Welcome to DEV@Deakin! 🎉</Message.Header>
          <p>Thank you for subscribing! We've sent a beautiful welcome email to your inbox.</p>
          <p style={{fontSize: '0.9em', marginTop: '10px', color: '#666'}}>
            Check your email for our welcome message and stay tuned for daily updates!
          </p>
        </Message>
      )}
    </Container>
  );
};

export default NewsletterSignup; 