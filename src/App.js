import React from 'react';
import Background from './components/BackgroundMovie/Background';
import Nav from './components/TopNavbar/Nav';
import LargeCard from './components/Body/Cards';
import Footer from './components/Footer/Footer';
import ServicesList from './components/DescriptionServices/Services';

function App() {
  return (
    <>
      <Nav />
      <Background />
      <LargeCard />
      <ServicesList />
      <Footer />
      
    </>
  );
}

export default App;
