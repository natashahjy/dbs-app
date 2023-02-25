import React, { useState, useEffect }from "react";
import './styles/CreateClaimForm.css';

const CreateClaimForm = () => {
    const [Amount, setAmount] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [ReceiptNumber, setReceiptNumber] = useState('');
    const [Purpose, setPurpose] = useState('');
    const [ExpenseDate, setExpenseDate] = useState('');
    const [FollowUp, setFollowUp] = useState('');
    const [OldClaim, setOldClaim] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
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

            {FollowUp != 'No'? (<input type='number' name='OldClaimID' id='OldClaimID' onChange={(e) => setOldClaim(e.target.value)} placeholder='OldClaimID'>
            </input>): <div></div>}

            <button className='SubmitButton' type='submit'>Submit</button>

        </form>
        </div>
    )
}

export default CreateClaimForm;