import React from 'react';
import {Link} from 'react-router-dom';


const Header= () =>{

    return(<div>
           <nav style={{margin: '20px'}}>
           <Link style={{margin: '20px'}} to="/">Home</Link>
           <Link style={{margin: '20px'}} to="/formie">Formie</Link>  
       <Link style={{margin: '20px'}} to="/somewhere">Hello World</Link>

       </nav> 
    </div>)
  }

  export default Header