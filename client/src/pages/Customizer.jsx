import React, { useState } from "react";
import { ColorPicker, FilePicker, Button } from "../components";
import { swatch, fileIcon } from "../assets";

import state from "../store";

const Customizer = ({ onGoBack }) => {
  const [file, setFile] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");

  const EditorTabs = [
    {
      name: "colorpicker",
      icon: swatch,
    },
    {
      name: "filepicker",
      icon: fileIcon,
    },
  ];

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  const reader = (file) => Promise.resolve(file);

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  const goBack = () => {
    console.log("Go Back button clicked in Customizer");
    onGoBack();
  };

  return (
    <>
      <div className="c-header">
        <div className="goback-btn-container">
          <Button title="Go Back" onClick={goBack} />
        </div>
        <h1>customizer header here</h1>
      </div>
      <div>
        <div className="editor-tabs">
          {EditorTabs.map((tab) => (
            <div
              key={tab.name}
              tab={tab}
              onClick={() => setActiveEditorTab(tab.name)}
              className="editor-tab-name"
            >
              <img src={tab.icon} alt={tab.name} />
              {tab.name}
            </div>
          ))}
          {generateTabContent()}
        </div>
      </div>
    </>
  );
};

export default Customizer;
