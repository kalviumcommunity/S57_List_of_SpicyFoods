import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './explore';
import SignIn from './SignIn';


function Link() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/explore/new" element={<NewExplore />} />
      </Routes>
    </Router>
  );
}

export default App;
