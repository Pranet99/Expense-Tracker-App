import React, { useState } from 'react';

function ExpensesForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isRecurring, setIsRecurring] = useState('No');
  const [isImportant, setIsImportant] = useState('No');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!amount || amount <= 0) newErrors.amount = 'Please enter a valid amount';
    if (!description) newErrors.description = 'Description is required';
    if (!date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log({ amount, description, isRecurring, isImportant, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount Spent:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description of Spending:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Is Recurring:</label>
        <select
          value={isRecurring}
          onChange={(e) => setIsRecurring(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Is Important:</label>
        <select
          value={isImportant}
          onChange={(e) => setIsImportant(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date of Spending:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Expense
      </button>
    </form>
  );
}

export default ExpensesForm;
