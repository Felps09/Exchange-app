//Documentantion Page
//Made by: Felipe Prudencio
//For Langara CPSC 2261

function Documentation(){
    return(
        <div>
            <h1>This is the Documentation page for the Exchange App.</h1>
            <h3>In this app you can see a list of currencies and their codes as well as filter a Currency <a href="/Currencies">Currencies List</a>  </h3>
            <h3>You can check how much Bitcoin is worth aginst global currencies <a href="/crypto">Bitcoin</a>  </h3>
            <h3>You can check the exchange of the Canadian Dollar against other currencies <a href="/SelectCurrency">Canadian Dollar</a> </h3>
            <h3>You can choose a Currency and see its individual value versus the Canadian Dollar <a href="/CurToCur">Currency To Currency</a> </h3>
        </div>
    );
}

export default Documentation;