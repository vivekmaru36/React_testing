import React, { useState } from "react";
import "./App.css";
import axios from "axios"; // Import Axios

function App() {
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

  const [fetchedData, setFetchedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    axios
      .post('https://localhost:44367/api/crudoperations/InsertRecord', postData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);

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
        console.error('Error:', error);
      });
  };

  // State variables for extracted data
  const [id, setId] = useState(null);
  const [createdDate, setCreatedDate] = useState(null);
  const [updatedDate, setUpdatedDate] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [age, setAge] = useState(null);
  const [contact, setcontact] = useState(null);

  // https://localhost:44367/api/crudoperations/GetAllRecord
  const handleFetchData = () => {
    axios
      .get('https://localhost:44367/api/crudoperations/GetAllRecord')
      .then((response) => {
        // Set the fetched data in the state
        setFetchedData(response.data);
        // storing each one
        setId(response.data.id);
        setCreatedDate(response.data.createdDate);
        setUpdatedDate(response.data.updatedDate);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setAge(response.data.age);
        setcontact(response.data.contact);
        setSalary(response.data.salary);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
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
      <button onClick={handleFetchData}>Fetch Data</button>
      <div>
        <h2>Fetched Data</h2>
        {fetchedData ? (
          // <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
          <div>
          <pre>
            <p>First Name : {JSON.stringify(fetchedData.data[0].firstName)} </p>
            <p>Last Name : {JSON.stringify(fetchedData.data[0].lastName)} </p>
            <p>Age : {JSON.stringify(fetchedData.data[0].age)} </p>
          </pre>
          </div>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;