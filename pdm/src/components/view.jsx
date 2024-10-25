import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function View (){
    const [people, setPeople] = useState([]);

    useEffect(() => {
      fetchPeople();
    }, []);
  
    const fetchPeople = async () => {
      const response = await axios.get('http://localhost:3000/patients');
      setPeople(response.data);
    };

    return(
        <>
        <div className='view'>

        {people.map((person, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{person.Patientid}</th>
              <th>{person.Name}</th>
              <th>{person.Address}</th>
              <th>{person.Phonenumber}</th>
              <th>{person.Gender}</th>
              <th>{person.DOB}</th>
              <th>{person.Reasonforvisit}</th>
              <th>{person.Department}</th>
              <th>{person.Drname}</th>
              <th>{person.Dateofvisit}</th>
              <th>{person.Diagnosis}</th>
              <th>{person.Prescriptions}</th>
              <th>{person.Treatmentplan}</th>
              <th>{person.FollowupAppointments}</th>
              <th>{person.InsuranceProviderInformation}</th>
              <th>{person.InvoicesNo}</th>
          
            </tr>
          ))}
        </div>
        </>
    )
}