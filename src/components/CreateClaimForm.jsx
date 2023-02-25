import React, { useState, useEffect }from "react";
import './styles/CreateClaimForm.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BasicSelect from "./SelectClaimDropdown";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CreateClaimForm = () => {
    const [Amount, setAmount] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [ReceiptNumber, setReceiptNumber] = useState('');
    const [Purpose, setPurpose] = useState('');
    const [ExpenseDate, setExpenseDate] = useState('');
    const [FollowUp, setFollowUp] = useState('');
    const [OldClaim, setOldClaim] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //fomat data
        let data = {
    "FirstName": FirstName, 
    "LastName": LastName, 
    "ReceiptNumber":ReceiptNumber,
    "Date":ExpenseDate, 
    "Amount": Amount, 
    "Purpose":Purpose, 
    "PreviousClaimId": OldClaim,
        }
       
        let res = await fetch(
            '/createClaim',{
                method:'POST',
                mode: 'cors',
                body: JSON.stringify(data)
            }
        );
        if(res.status){
            <Alert severity="success">Successfully created!</Alert>
            console.log("submitted")
        }
        else{
            <Alert severity="error">Error submitting form!</Alert>
            console.log("error")

        }
    };
    const onChange = (e) => {
        setOldClaim(e.target.value)
    };

    useEffect(() => {
        if(FollowUp == "No"){
            setOldClaim("")
        }
        console.log(OldClaim)
    }, [FollowUp])
    
    let claims = [
    {"ClaimID":1234, 
    "InsuranceID":"1016", 
    "InsuranceType":"Travel", 
    "FirstName": "Irene", 
    "LastName": "Lim", 
    "Date":"2023-02-11", 
    "Amount": 100.0, 
    "Purpose":"Overseas Injury", 
    "Status":"Approved", 
    },
    {"ClaimID":4321, 
    "InsuranceID":"1016", 
    "InsuranceType":"Travel", 
    "FirstName": "Irene", 
    "LastName": "Lim", 
    "Date":"2023-02-11", 
    "Amount": 100.0, 
    "Purpose":"Overseas Injury", 
    "Status":"Approved", 
    },
]
    

    return (
        <div className="FormContainer">
        <form className='CreateClaimForm' id='CreateClaimForm' onSubmit={ handleSubmit }>

            <input type='text' name='FirstName' id='FirstName' onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'>
            </input>
            <input type='text' name='FirstName' id='FirstName' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'>
            </input>

            <input type='number' name='ReceiptNumber' id='ReceiptNumber' onChange={(e) => setReceiptNumber(e.target.value)} placeholder='Receipt Number'>
            </input>

            <input type='number' name='ClaimAmount' id='ClaimAmount' onChange={(e) => setAmount(e.target.value)} placeholder='Claim Amount'>
            </input>

            <textarea type='text' name='Purpose' id='Purpose' onChange={(e) => setPurpose(e.target.value)} placeholder='Purpose'>
            </textarea>

            <input type="date" id="ExpenseDate" name="ExpenseDate" onChange={(e) => setExpenseDate(e.target.value)} placeholder='Expense Date'>
            </input>

            <label for="FollowUp">Follow Up?</label>
            <select name="FollowUp" id="FollowUp" form='CreateClaimForm' onChange={(e) => setFollowUp(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            {FollowUp != 'No'? (
                <Select label="Select your claim" value={OldClaim} onChange={onChange}>
                    {claims.map(claim =>{
                        return(
                            <MenuItem value={claim.ClaimID}>ClaimId: {claim.ClaimID} | InsuranceType:{claim.InsuranceType} | Amount:{claim.Amount}</MenuItem>
                        )
                    })}
                </Select>
            )
            // <input type='number' name='OldClaimID' id='OldClaimID' onChange={(e) => setOldClaim(e.target.value)} placeholder='OldClaimID'></input>)
            : <div></div>}

            <button className='SubmitButton' type='submit'>Submit</button>

        </form>
        </div>
    )
}

export default CreateClaimForm;