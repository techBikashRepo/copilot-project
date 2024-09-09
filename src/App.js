import React, { useState } from "react";
import "./App.css";
import LeftPanel from "./LeftPanel";
import FileList from "./FileList";

const App = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="app">
      <div className="left-panel-container">
        <LeftPanel onSelectSubcategory={handleSelectSubcategory} />
      </div>
      <div className="file-list-container">
        {selectedSubcategory ? (
          <FileList subcategory={selectedSubcategory} />
        ) : (
          <div className="placeholder">Select a subcategory to view files</div>
        )}
      </div>
    </div>
  );
};

export default App;
