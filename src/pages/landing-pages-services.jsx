import { useState } from 'react';


function LandingPageServices(){
  const [count, setCount] = useState(0);
  return (
    <section>
      <Navbar/>
      <div>
        <h1>Landing Page Services</h1>
      </div>
      <Contact/>
      </section>
  )
}

export default LandingPageServices