import React from 'react';
import { Link } from 'react-router-dom'; 

const HeaderComponent = () => {
  return (
    <header>
    <div className='typewriter'>

     <h1> <i>

     XENTURY SALON AND MAKEOVER 
     </i>
     </h1>
    </div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
