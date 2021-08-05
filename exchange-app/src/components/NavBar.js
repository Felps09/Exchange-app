import React from 'react';
import  {Link} from 'react-router-dom';

//Navabar which defines the links of the other pages in the app
const NavBar = () => {
    return(
        <nav>
            <div>
                <Link to="/">Home<br/></Link>
                <Link to="/Currencies">Currency List<br/></Link>
                <Link to="/crypto">Bitcoin<br/></Link>    
                <Link to='/SelectCurrency'>Selected Currency <br/></Link> 
                <Link to='/CurToCur'>Currency To Currency <br/></Link>  
                <Link to='/Documentation'>Documentation <br/></Link>   
            </div>
        </nav>
        
    )
}

export default NavBar;