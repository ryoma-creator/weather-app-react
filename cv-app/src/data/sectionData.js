

export const categoriesData = [
    {id: 1, title: 'Profile Section'},
    {id: 2, title: 'Education Section'},
    {id: 3, title: 'Work Experience'},
    {id: 4, title: 'Skills Sector'},
    {id: 5, title: 'Mini Project'},
    {id: 6, title: 'Social'},
];


export const sectionData = {
  profile: {
    title: 'Please Add your Profile details',
    fields: [
      { id: 0, placeholder: 'First Name', type: 'text' },
      { id: 1, placeholder: 'Last Name', type: 'text' },
      { id: 2, placeholder: 'Phone Number', type: 'tel', pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}'},
      { id: 3, placeholder: 'Address', type: 'text' }
    ]
  },
  education: {
    title: 'Please Add your Education details',
    fields: [
      { id: 0, placeholder: 'School Name', type: 'text' },
      { id: 1, placeholder: 'Degree', type: 'text' },
      { id: 2, placeholder: 'Field of Study', type: 'text' },
      { id: 3, placeholder: 'Graduation Year', type: 'number',  min: "1980", max: "2030" } // または 'date'
    ]
  },
  work: {
    title: 'Please Add your Work Experience',
    fields: [
      { id: 0, placeholder: 'Company Name', type: 'text' },
      { id: 1, placeholder: 'Position', type: 'text' },
      { id: 2, placeholder: 'Start Date', type: 'date' },
      { id: 3, placeholder: 'End Date', type: 'date' },
      { id: 4, placeholder: 'Responsibilities', type: 'textarea' }
    ]
  },
  skills: {
    title: 'Please Add your Skills',
    fields: [
      { id: 0, placeholder: 'Skill', type: 'text' } 
    ]
  },
  mini: {
    title: 'Please Add your Mini Project details',
    fields: [
      { id: 0, placeholder: 'Project Name', type: 'text' },
      { id: 1, placeholder: 'Tech Stack', type: 'text' },
      { id: 2, placeholder: 'Description', type: 'textarea' }
    ]
  },
  social: {
    title: 'Please Add your Social Links*',
    fields: [
      { id: 0, placeholder: 'Social Links', type: 'url' } 
    ]
  }
};


  