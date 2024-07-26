import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Record = () => {
  const [people, setPeople] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', employeeid: '', checkin: '', checkout: '' });

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    const response = await axios.get('http://localhost:3000/records');
    setPeople(response.data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const addPerson = async () => {
    await axios.post('http://localhost:3000/records', newPerson);
    fetchPeople();
    setNewPerson({ name: '', employeeid: '', checkin: '', checkout: '' });
  };

  const deletePerson = async (id) => {
    await axios.delete(`http://localhost:3000/records/${id}`);
    fetchPeople();
  };

  return (
    <div className='main'>
      <div className='input'>
        <h2>Add New Person</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPerson.name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="employeeid"
          placeholder="employeeid"
          value={newPerson.employeeid}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="checkin"
          name="checkin"
          placeholder="checkin"
          value={newPerson.checkin}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="checkout"
          placeholder="checkout"
          value={newPerson.checkout}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={addPerson}>Add Person</button>
      </div>


      <div className='record'>
        <table className='table-bordered'>
          {people.map((person, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{person.name}</th>
              <th>{person.employeeid}</th>
              <th>{person.checkin}</th>
              <th>{person.checkout}</th>
              <th><button onClick={() => deletePerson(person.id)}>Delete</button></th>
            </tr>
          ))}

        </table>
      </div>


    </div>
  );
};

export default Record;
