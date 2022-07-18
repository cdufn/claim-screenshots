import { Fragment, useState, useEffect } from 'react';
import { getAllPayments, getAllPaymentsAxiosVersion, getAllPaymentsRestVersion } from '../data/DataFunctions';
import TransactionRow from './TransactionRow';
import './Transactions.css';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);
    
    const getTransactionsDataFromServer = () => {
        const paymentsPromise = getAllPaymentsAxiosVersion();
        paymentsPromise.then (
            (response) => {
                console.log(response)
                if(response.status === 200) {
                    setTransactions(response.data);                    
                }
                else {
                    console.log("Something went wrong", response.status);
                }
            }
        )
        .catch (
            (error) => {
                console.log("Server error", error);
            }
        );
    };

    useEffect( () => {
        getTransactionsDataFromServer();
    } , [] );
    
    
    const allClaimTypes = transactions.map( transaction => transaction.claim_type);
    const uniqueClaimTypes = allCountries.filter ( (claim_type,index) =>  
        allClaimTypes.indexOf(country) === index
    );

    const [selectedClaimType, setClaimType] = useState("none");

    

    const claimTypeOptions = allClaimTypes.map
     ( claim_type => <option key={claim_type} value={claim_type}>{claim_type}</option> );

    const displayTransactions = transactions.map ( trans => 
        (trans.claim_type === selectedClaimType) && 
        <TransactionRow key={trans.claim_id} id={trans.claim_id} date ={trans.date} country={trans.country} 
            currency={trans.currency} amount={trans.amount} />
      );

    const changeCountry = (event) => {
        const selectedCountryIndex =event.target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[selectedCountryIndex-1]);
    }

    return <Fragment>
        <p >Select country: <select onChange={changeCountry} defaultValue="none" >
                <option disabled value ="none"> Please select a country </option>
                {countryOptions}
            </select>
        </p>

        <table id="transactionsTable" style= {{background: "#ccc"}} className="transactionsTable">
            <thead>
            <tr><th>Claim ID</th><th>Policy Number</th><th>First Name</th><th>Surname</th><th>Claim Type</th><th>Claim Status</th><th>View/Edit</th></tr>
            </thead>
            <tbody>
            {displayTransactions}
            </tbody>
        </table>

        {transactions.length === 0 && <p>Please wait... loading data</p>}
        </Fragment>
}

export default Transactions;