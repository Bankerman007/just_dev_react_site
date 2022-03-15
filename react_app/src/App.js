import React from 'react';
import Background from './components/BackgroundMovie/Background';
import Nav from './components/TopNavbar/Nav';
import LargeCard from './components/Body/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Background />
      <LargeCard />
      <Footer />
    </>
  );
}

export default App;
