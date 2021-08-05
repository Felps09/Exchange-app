import { useState, } from 'react';
import axios from 'axios';
import listOfCurrencies from './listOfCurrencies.json';
import cursCodes from './cursCodes.json';

var allRepos;

//Componetns main function. This page displays all currencies and their codes. The user can also filter the list to find a currency base on its code.
function CurrencyList(){
    //Constants for the app state and filter function
    const [curFilter, setCurFilter] = useState('');
    const [AppState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    //Consume api
    function getApi(){
        setAppState({loading: true});
        const apiURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
        axios.get(apiURL).then((repos) => {
            allRepos = repos.data;
            setAppState({loading: false, repos: allRepos})
        }); 
    };
    //Handles changes and manages user input. If statement to prevent warnings.
    function handleChange(e){
        setCurFilter(e.target.value);
        if(AppState !== 0){

        }
    }
    //Prevent default submit and resets the app state
    function handleSubmit(e){
        e.preventDefault();
        getApi();
        setAppState({loading: true});
    }
    //Passing list data to string and spliting the string for ease of filtering
    let currencyList = JSON.stringify(listOfCurrencies,null,2);
    let str = currencyList.split(',');
    
    //Function that depending on user input filters a currency and logs it to the console. Iterates the entire list
    function filterTheCurs(){
        console.log(curFilter);
        for(let x = 0; x <= 166; x++){
            if(curFilter === cursCodes[x] ){
                console.log("found",str[x-1]);
                return( currencyList =  str[x-1]);
            }
        }
     };

     
     //Returns the form for the user input and the list of currencies
    return(
        <div>
             <br/><br/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="filterCur">Filter the list by Currency code: &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
                type="text"
                name='filterCur'
                value={curFilter}
                onChange={handleChange}
            />
            <button type="submit" onClick={filterTheCurs}>Select</button><br/>
            Result will appear in the console.
        </form>
        <br/><br/>
            <pre>List of Currencies: 
                <br></br>
                {currencyList}
                
                <br/>
            </pre>
        </div>
    );
}

export default CurrencyList;