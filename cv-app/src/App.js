import logo from './logo.svg';
import CategoryList from './components/01_CategoryList.js';
import './styles/App.css';
import ProfileForm from './components/01_ProfileForm.js';
import { setSelectionRange } from '@testing-library/user-event/dist/utils/index.js';
import { categoriesData } from './data/sectionData.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('profile');

  const handleCategorySelect = (categoryId) => {
    const category = categoriesData.find(cat => cat.id === categoryId);
    setSelectedCategory(category.title.toLowerCase().split(' ')[0]);
  };

  return (
    <>
    <h1>RESUME GENERATOR</h1>
    <CategoryList 
      categoriesData={categoriesData}
      onSelectCategory={handleCategorySelect}
      selectedCategory={selectedCategory}
    />
    <ProfileForm
      secotionDataKey={sectionData[selectedCategory]}
    />
    </>
  );
}

export default App;
