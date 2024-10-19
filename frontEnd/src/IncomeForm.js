import React, { useState } from 'react';

function IncomeForm() {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState('No');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ source, amount, isRecurring, date });
    // Here you will add logic to send data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Source of Income:</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Amount (INR):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Is Recurring:</label>
        <select
          value={isRecurring}
          onChange={(e) => setIsRecurring(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label>Date of Receiving:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit Income</button>
    </form>
  );
}

export default IncomeForm;
