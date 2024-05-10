import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import backgroundImage from './assets/background-img.png';
import SignIn from './components/SignIn';
import Explore from './components/explore'; 


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="searchBar"
      />
      <button type="submit">Search</button>
    </form>
  );
}

function FooterButton({ label, to }) {
  return <Link to={to} className="footerButton">{label}</Link>;
}

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="top-bar">
          <div className="menu-buttons">
            <FooterButton label="Our Menu" to="/menu" />
            <FooterButton label="About" to="/about" />
          </div>
          <button className="sign-in-button" onClick={handleSignInClick}>Sign In</button>
        </div>
        <div className="header">
          <h1 className="heading">Spicy Food</h1>
          <button className="homeButton">Home</button>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="content">
          <p className="tagline">IT'S NOT JUST<br /> A FOOD ITS AN EXPERIENCE</p>
          <Link to="/explore" className="exploreButton">Explore</Link>
        </div>
        <Routes>         
          <Route path="/explore" element={<Explore/>}></Route>
        </Routes>
        <Link to="/explore">Explore</Link>
        <Link to="/signIn">Sign In</Link>
    
        {showSignIn && <SignIn />}
      </div>


  );
}

export default App;

