import { useState } from 'react';
import './CategoryButtons.css';

const categories = [
  { id: 'general', label: '😄 General' },
  { id: 'programming', label: '💻 Programming' },
  { id: 'knock-knock', label: '🚪 Knock-Knock' },
  { id: 'miscellaneous', label: '🎲 Misc' },
  { id: 'dark', label: '🖤 Dark' },
];

function CategoryButtons({ onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (categoryId) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="category-buttons">
      <p className="category-label">Pick a Category:</p>
      <div className="buttons-group">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`btn-category ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryButtons;
