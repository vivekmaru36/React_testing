import React, { useState } from "react";
import "./App.css";

// using axios to send data to apis
import axios from "axios"; // Import Axios

function App() {
  // Define state variables for each form field
  const [formData, setFormData] = useState({
    id: "",
    createdDate: "",
    updatedDate: "",
    firstName: "",
    lastName: "",
    age: null,
    contact: "",
    salary: null,
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

    const postData = {
      id: formData.id,
      createdDate: formData.createdDate,
      updatedDate: formData.updatedDate,
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      contact: formData.contact,
      salary: formData.salary,
    };

    // Make a POST request to your API
    axios
      .post('https://localhost:44367/api/crudoperations/InsertRecord', postData)
      .then((response) => {
        // Handle the API response (e.g., success or error)
        console.log('Data sent successfully:', response.data);

        // Optionally, reset the form fields after successful submission
        setFormData({
          id: '',
          createdDate: '',
          updatedDate: '',
          firstName: '',
          lastName: '',
          age: '',
          contact: '',
          salary: '',
        });
      })
      .catch((error) => {
        // Handle API request error
        console.error('Error:', error);
      });
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
