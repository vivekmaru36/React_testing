import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state variables for each form field
  const [formData, setFormData] = useState({
    id: '',
    createdDate: '',
    updatedDate: '',
    firstName: 'Vivek',
    lastName: 'Maru',
    age: 19,
    contact: '93265999644',
    salary: 10000,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API
  };

  return (
    <div className="App">
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Created Date:
          <input
            type="text"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Updated Date:
          <input
            type="text"
            name="updatedDate"
            value={formData.updatedDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
