import React, { useState } from "react";
import "./FileList.css";

const initialFiles = {
  Subcategory1: ["file1.txt", "file2.js"],
  Subcategory2: ["file3.html", "file4.css"],
  Subcategory3: ["file5.java", "file6.py"],
  Subcategory4: ["file7.rb", "file8.go"],
  Subcategory5: ["file9.txt", "file10.js"],
  Subcategory6: ["file11.html", "file12.css"],
  Subcategory7: ["file13.java", "file14.py"],
  Subcategory8: ["file15.rb", "file16.go"],
};

const categories = {
  Category1: ["Subcategory1", "Subcategory2"],
  Category2: ["Subcategory3", "Subcategory4"],
  Category3: ["Subcategory5", "Subcategory6"],
  Category4: ["Subcategory7", "Subcategory8"],
};

const FileList = ({ subcategory, category }) => {
  const [files, setFiles] = useState(initialFiles);
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRightClick = (event, file) => {
    event.preventDefault();
    setSelectedFile(file);
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setContextMenu(null);
    setSelectedFile(null);
  };

  const handleViewFile = () => {
    alert(`Viewing file: ${selectedFile}`);
    handleClose();
  };

  const handleMoveFile = (newSubcategory) => {
    setFiles((prevFiles) => {
      const updatedFiles = { ...prevFiles };
      // Remove the file from the current subcategory
      updatedFiles[subcategory] = updatedFiles[subcategory].filter(
        (file) => file !== selectedFile
      );
      // Add the file to the new subcategory
      updatedFiles[newSubcategory] = [
        ...updatedFiles[newSubcategory],
        selectedFile,
      ];
      return updatedFiles;
    });
    handleClose();
  };

  return (
    <div className="file-list">
      <h2>{subcategory}</h2>
      <ul>
        {files[subcategory]?.map((file) => (
          <li
            key={file}
            onContextMenu={(event) => handleRightClick(event, file)}
          >
            {file}
          </li>
        ))}
      </ul>
      {contextMenu && (
        <div
          className="context-menu"
          style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
          onMouseLeave={handleClose}
        >
          <div className="context-menu-item" onClick={handleViewFile}>
            View
          </div>
          <div className="context-menu-item">
            Move to
            <ul className="context-submenu">
              {categories[category]?.map(
                (sub) =>
                  sub !== subcategory && (
                    <li key={sub} onClick={() => handleMoveFile(sub)}>
                      {sub}
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileList;
