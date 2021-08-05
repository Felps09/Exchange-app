import {useState } from 'react';
import axios from 'axios';

//Global variables for easier access
var allRepos;
var apiURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/cad.json';
var updatedURL = apiURL;

//Main component function. Upon user entry displays a currency value against the Canadian Dollar
//Currency has been abreviatted to cur/curs in some cases.
function CurrencyToCurrency(){
    //Constant for the currency name and default value 'usd'.
    const [curName,setCurName] = useState('usd');
    //sets the new currency to local storage so it persists on the users end
    const handle = () => {
        localStorage.setItem('Currency', curName);
    }
    //Sets the new currency and alerts the user of the selection.
    function newCur(curName){
        alert('The selected currency is: ' + curName);
        setAppState([...curName,curName]);
    }
    //constant for the app state 
    const [AppState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    // get api request in which the URL gets updated depending on the new currency
    function getApi(){
        setAppState({loading: true});
        axios.get(updatedURL).then((repos) => {
            allRepos = repos.data;
            setAppState({loading: false, repos: allRepos})
        }); 
    };
    //Handles the user input
    function handleChange(e){
        setCurName(e.target.value);
    }
     
    //On user submission of new currency, updates the url and renews the app state.
    function handleSubmit(e){
        updatedURL = ''
        e.preventDefault();
        newCur(curName);
        updatedURL += 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';
        updatedURL += curName;
        updatedURL += '/cad.json';
        
        apiURL = updatedURL;
        console.log(updatedURL);
        getApi();
        setCurName('');
        updatedURL = '';
        
        
    };

    
    //passing data to sting so it correctly displays
    let currencyToCurrency = JSON.stringify(allRepos,null,2);
    //log for warnings and error checks
    console.log(AppState);
    //Returns the form so the user can input a new currency and the exchange rate to cad of the inputed currency.
    return(
        <div>
            <br/><br/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="newCur">Type a currency to check its value againg the Canadian Dollar: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
                type="text"
                name='curName'
                value={curName}
                onChange={handleChange}
                //ref={(input) => this.input = input}
            />
            <button type="submit" onClick={handle}>Select</button>
        </form>
        <br/><br/>
        <pre>1 {localStorage.getItem('Currency')} in cad is: 
            <br></br>
            {currencyToCurrency}
             <br/>
        </pre>
        </div>
    );
}

//Exports to main app
export default CurrencyToCurrency;

//End of File.

