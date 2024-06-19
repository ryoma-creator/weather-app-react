import React, { useState } from 'react';

function Person() {
  const [firstName, setfirtstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + lastName;



  return (
    <>
      <h1>{fullName}</h1>

      <label>
        <input
          className='firstName'
          value={firstName}
          onInput={(e) => firtstName{e.target.value}}
        >
          first name
        </input>

        <input
          className='lastName'
          value={lastName}
        >
          last name
        </input>

      </label>
      
    </>
  );
}

export default Person;

