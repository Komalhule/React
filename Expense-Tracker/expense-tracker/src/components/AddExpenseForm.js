import React from 'react';

const AddExpenseForm = () => {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          required='required'
          placeholder='Enter expense name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='cost'>Cost</label>
        <input
          type='number'
          className='form-control'
          id='cost'
          required='required'
          placeholder='Enter expense cost'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
