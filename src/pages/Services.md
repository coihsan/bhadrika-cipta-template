import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function LandingPageServices(){
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Navbar/>
      <div>
        <h1>Landing Page Services</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <Contact/>
      </Router>
  )
}

export default LandingPageServices