import React, { useState } from 'react';

function LoansEmiForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [dateOfCompletion, setDateOfCompletion] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!amount || amount <= 0) newErrors.amount = 'Please enter a valid amount';
    if (!description) newErrors.description = 'Description is required';
    if (!dateOfCompletion) newErrors.dateOfCompletion = 'Date of completion is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log({ amount, description, dateOfCompletion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date of Completion:</label>
        <input
          type="date"
          value={dateOfCompletion}
          onChange={(e) => setDateOfCompletion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.dateOfCompletion && <p className="text-red-500 text-xs italic">{errors.dateOfCompletion}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Loan/EMI
      </button>
    </form>
  );
}

export default LoansEmiForm;
