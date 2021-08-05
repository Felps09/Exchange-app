import { useEffect, useState, } from 'react';
import axios from 'axios';



var allRepos;
//Component main function, Displays the btc equivalent to the list of currencies
function Crypto(){ 
    //setting app state and consuming the api with a axios.get request
    const [AppState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    useEffect(() => {
        setAppState({loading: true});
        const apiURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json';
        //data of the request is passed to a variable
        axios.get(apiURL).then((repos) => {
            allRepos = repos.data;
            setAppState({loading: false, repos: allRepos})
            console.log(repos.data);
        }); 
    },[])
    //check for possible errors
    console.log(AppState);
    //passing data to a string so it can be displayed properly
    let crypto = JSON.stringify(allRepos,null,2);
    
    //return statement with the list
    return(
        <pre>List of Currencies based on the Bitcoin value of today: 
            <br></br>
            {crypto}
             <br/>
        </pre>
    );
}
// Export components main function
export default Crypto;

//End of File