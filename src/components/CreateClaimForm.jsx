import React, { useState, useEffect }from "react";
import './styles/CreateClaimForm.css';

const CreateClaimForm = () => {
    const [Amount, setAmount] = useState('');
    const [Purpose, setPurpose] = useState('');
    const [ExpenseDate, setExpenseDate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="FormContainer">
        <form className='CreateClaimForm' onSubmit={ handleSubmit }>
            <input type='number' name='Amount' id='Amount' onChange={(e) => setAmount(e.target.value)} placeholder='Amount'>
            </input>
            <textarea type='text' name='Purpose' id='Purpose' onChange={(e) => setPurpose(e.target.value)} placeholder='Purpose'>
            </textarea>
            <input type="date" id="ExpenseDate" name="ExpenseDate" onChange={(e) => setExpenseDate(e.target.value)} placeholder='Expense Date'>
            </input>
            <button className='SubmitButton' type='submit'>Submit</button>

        </form>
        </div>
    )
}

export default CreateClaimForm;