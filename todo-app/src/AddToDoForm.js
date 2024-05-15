import React from 'react';

const AddToDoForm = ({ addToDo }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new ToDo"/>
        <button type="submit" className="btn btn-success ms-2">
        Add
      </button>

    </form>
  );
};

export default AddToDoForm;