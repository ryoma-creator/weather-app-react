import React, { useState }  from 'react';
import logo from './logo.svg';
import CategoryList from './components/01_CategoryList.js';
import './styles/App.css';
import ProfileForm from './components/01_ProfileForm.js';
import { setSelectionRange } from '@testing-library/user-event/dist/utils/index.js';
import { categoriesData } from './data/sectionData.js';
import { sectionData } from './data/sectionData.js';

function App() {
  const [categoryState, setSelectedCategory] = useState('profile');

  const handleCategorySelect = (categoriesDataId) => {
    const category = categoriesData.find(cat => cat.id === categoriesDataId);
    setSelectedCategory(category.title.toLowerCase().split(' ')[0]);
  };

  return (
    <>
    <h1>RESUME GENERATOR</h1>
    <CategoryList 
      categoriesData={categoriesData}
      onSelectCategory={handleCategorySelect}
      categoryState={categoryState}
    />
    <ProfileForm
      sectionDataKey={sectionData[categoryState]}
    />
    </>
  );
}

export default App;
