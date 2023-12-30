import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories'

function App() {
  return (
    <div className="bg-robin-egg-blue min-h-screen">

      <Banner />
      <Categories />
      <hr/>

    </div>
  );
}

export default App;