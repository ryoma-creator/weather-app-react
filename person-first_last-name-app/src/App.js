import React, { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = `${firstName} ${lastName}`;



  return (
    <>
      <h1>{fullName}</h1>
      <label>
        First Name: 
        <input
          type="text"
          placeholder='Please Type your First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Last Name:       
        <input
          type="text"
          placeholder='Please Type your Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
       </label>
    </>
  );
}

export default Person;

