import React, { useState } from "react";
import axios from 'axios';
export default function Entry() {


  const [newPerson, setNewPerson] = useState({
    Patientid: "",
    Name: "",
    Address: "",
    Phonenumber: "",
    Gender: "",
    DOB: "",
    Reasonforvisit: "",
    Department: "",
    Drname: "",
    Dateofvisit: "",
    Diagnosis: "",
    Prescriptions: "",
    Treatmentplan: "",
    FollowupAppointments: "",
    InsuranceProviderInformation: "",
    InvoicesNo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };


  const addPerson = async () => {
    await axios.post('http://localhost:3000/patients', newPerson);
    // fetchPeople();
    setNewPerson({ Patientid: "",
      Name: "",
      Address: "",
      Phonenumber: "",
      Gender: "",
      DOB: "",
      Reasonforvisit: "",
      Department: "",
      Drname: "",
      Dateofvisit: "",
      Diagnosis: "",
      Prescriptions: "",
      Treatmentplan: "",
      Followupappointments: "",
      InsuranceProviderInformation: "",
      InvoicesNo: "", });
  };


  return (
    <>
      <div className="main-div">
        <center>
          <h4>ENTER PATIENT RECORD</h4>
          <label>Patientid:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Patientid"
            placeholder="Patientid"
            value={newPerson.Patientid}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Patient Name:</label> &nbsp;&nbsp;
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={newPerson.Name}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Address:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Address"
            placeholder="Address"
            value={newPerson.Address}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Phonenumber:</label>
          <input
            type="text"
            name="Phonenumber"
            placeholder="Phonenumber"
            value={newPerson.Phonenumber}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Gender:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Gender"
            placeholder="Gender"
            value={newPerson.Gender}
            onChange={handleInputChange}
          />
          <br></br>
          <label>DOB:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="DOB"
            placeholder="DOB"
            value={newPerson.DOB}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Reason for visit:</label>
          <input
            type="text"
            name="Reasonforvisit"
            placeholder="Reasonforvisit"
            value={newPerson.Reasonforvisit}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Department:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Department"
            placeholder=" Department"
            value={newPerson.Department}
            onChange={handleInputChange}
          />
          <br></br>
          <label>DR.Name:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Drname"
            placeholder="Drname"
            value={newPerson.Drname}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Date of Visit:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Dateofvisit"
            placeholder="Dateofvisit"
            value={newPerson.Dateofvisit}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Diagnosis:</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Diagnosis"
            placeholder="Diagnosis"
            value={newPerson.Diagnosis}
            onChange={handleInputChange}
          />
          <br></br>
          <label>prescriptions:</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Prescriptions"
            placeholder="Prescriptions"
            value={newPerson.Prescriptions}
            onChange={handleInputChange}
            className="Prescription"
          />
          <br></br>
          <label>Treatment Plan:</label> &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="Treatmentplan"
            placeholder="Treatmentplan"
            value={newPerson.Treatmentplan}
            onChange={handleInputChange}
            className="Treatmentplan"
          />
          <br></br>
          <label>Follow up Appoinment:</label>
          <input
            type="text"
            name="Followupappointments"
            placeholder="Followupappointments"
            value={newPerson.Followupappointments}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Insurance Provider Information:</label>
          <input
            type="text"
            name="InsuranceProviderInformation"
            placeholder="InsuranceProviderInformation"
            value={newPerson.InsuranceProviderInformation}
            onChange={handleInputChange}
          />
          <br></br>
          <label>Invoices No</label>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="InvoicesNo"
            placeholder="InvoicesNo"
            value={newPerson.InvoicesNo}
            onChange={handleInputChange}
          />
          <br></br>
          <button onClick={addPerson}>Add Person</button>
          <p>Thanks For Giving The Data</p>
          
          
        </center>
      </div>
    </>
  );
}
