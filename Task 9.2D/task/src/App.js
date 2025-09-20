import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import Plans from './components/Plans';
import NotFound from './components/NotFound';


import './App.css';
import Checkout from './components/Checkout';
import PlanDetails from './components/PlanDetails';
import PostEditor from './components/PostEditor';

function HomePage() {
  return (
    <div>
      <Banner />
      <FeaturedArticles />
      <FeaturedTutorials />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<Plans />} />
         <Route path="/plans/:planId" element={<PlanDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/plans/:planId" element={<PlanDetails />} /> 
        <Route path="/post" element={<PostEditor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
