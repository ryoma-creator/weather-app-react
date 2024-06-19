import React, { useState } from 'react';

function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
    </>
  );
}

export default Person;

