import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import NewsletterSubscribe from './components/NewsletterSubscribe';


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeaturedArticles />
      <FeaturedTutorials />
      {/* Newsletter block (centered) */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <NewsletterSubscribe />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;

