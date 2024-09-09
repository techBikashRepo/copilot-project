import React, { useState } from "react";
import "./LeftPanel.css";

const categories = {
  Category1: ["Subcategory1", "Subcategory2"],
  Category2: ["Subcategory3", "Subcategory4"],
  Category3: ["Subcategory5", "Subcategory6"],
  Category4: ["Subcategory7", "Subcategory8"],
};

const LeftPanel = ({ onSelectSubcategory }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleSubcategoryClick = (subcategory, category) => {
    setSelectedSubcategory(subcategory);
    onSelectSubcategory(subcategory, category);
  };

  return (
    <div className="left-panel">
      {Object.keys(categories).map((category) => (
        <div key={category} className={`category ${category.toLowerCase()}`}>
          <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
          {expandedCategory === category && (
            <ul>
              {categories[category].map((subcategory) => (
                <li
                  key={subcategory}
                  className={
                    selectedSubcategory === subcategory ? "selected" : ""
                  }
                  onClick={() => handleSubcategoryClick(subcategory, category)}
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;
