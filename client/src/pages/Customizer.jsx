import React, { useState } from "react";
import { ColorPicker, FilePicker, Button } from "../components";
import { swatch, fileIcon } from "../assets";

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

  // const reader = (file) => Promise.resolve(file);
  // const handleDecals = (type, result) => {

  // };

  // const readFile = (type) => {
  //   reader(file).then((result) => {
  //     handleDecals(type, result);
  //     setActiveEditorTab("");
  //   });
  // };

  const goBack = () => {
    console.log("Go Back button clicked in Customizer");
    onGoBack();
  };

  return (
    <>
      <div className="left">
        <h1>top left image here</h1>
      </div>
      <div>
        <div>
          {EditorTabs.map((tab) => (
            <div
              key={tab.name}
              tab={tab}
              handleClick={() => setActiveEditorTab(tab.name)}
            ></div>
          ))}
          pickers{generateTabContent()}
        </div>
      </div>

      <div>
        <Button title="Go Back" onClick={goBack} />
      </div>
    </>
  );
};

export default Customizer;
