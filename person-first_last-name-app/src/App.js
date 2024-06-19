import React, { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = `${firstName} ${lastName}`;



  return (
    <>
      <h1>{fullName}</h1>

      <label>
        <input
          type="test"
          placeholder='Please Type your First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="test"
          placeholder='Please Type your Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

      </label>
      
    </>
  );
}

export default Person;

