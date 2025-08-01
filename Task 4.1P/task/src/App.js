import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
      
    </div>
  );
}

export default App;

