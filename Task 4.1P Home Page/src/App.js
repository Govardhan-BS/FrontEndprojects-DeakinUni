import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedArticles />
      <FeaturedTutorials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
