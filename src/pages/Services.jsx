import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function LandingPageServices(){
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Navbar/>
      <div>
        <h1>Landing Page Services</h1>
      </div>
      <Contact/>
      </Router>
  )
}

export default LandingPageServices