//Import statements 
import { useEffect, useState, } from 'react';
import axios from 'axios';

//definig global variable for the repos.data          
var todosRepos;

//Component main function. Will get data from an api pass it to a variable.
function SelectCurrency(){
    const [AppState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    useEffect(() => {
        setAppState({loading: true});
        var apiURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json';
        axios.get(apiURL).then((repos2) => {
            todosRepos = repos2.data;
            setAppState({loading: false, repos: todosRepos})
        }); 
    },[])
    //Logs app State for debugging purposes
    console.log(AppState);
    //Passing JSON data to string so it can be displayed.
    let selectedCurrency = JSON.stringify(todosRepos,null,2);
    //Retrun statement with the paragraph tag and the data assigned to a variable
    return(
        <pre>List of Currencies compared to the Canadian Dollar:<br/>{selectedCurrency}<br/></pre>
    );
}
//Export component function
export default SelectCurrency;

//End of File.