import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

import { ColorPicker, FilePicker, Button } from "../components";
import { swatch, fileIcon, reset } from "../assets";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");

  const EditorTabs = [
    {
      name: "color",
      icon: swatch,
    },
    {
      name: "file",
      icon: fileIcon,
    },
    {
      name: "reset",
      icon: reset,
    },
  ];

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "color":
        return <ColorPicker />;
      case "file":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      // case "reset":
      //   return (
      //     // fix reset button
      //     <Button title="Reset" type="outlined" handleClick={handleReset} />
      //   );
      default:
        return null;
    }
  };

  const reader = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });

  const readFile = (type) => {
    reader(file).then((result) => {
      state.logoDecal = result;
      setActiveEditorTab("");
    });
  };

  const toggleTab = (tabName) => {
    setActiveEditorTab((prevTab) => (prevTab === tabName ? "" : tabName));
  };

  const handleReset = () => {
    state.logoDecal = "";
  };

  return (
    <>
      {!snap.intro && (
        <>
          <div className="header">
            <h1 className="text-l">Customize it!</h1>
            <p>Choose color and upload your file</p>
            <Button
              title="Go Back"
              type="filled"
              handleClick={() => (state.intro = true)}
            />
          </div>

          <div className="editor-tabs-container">
            <div className="editor-tabs">
              {EditorTabs.map((tab) => (
                <div
                  key={tab.name}
                  tab={tab}
                  onClick={() => toggleTab(tab.name)}
                  className={`editor-tab-name ${
                    activeEditorTab === tab.name ? "active" : ""
                  }`}
                >
                  <img src={tab.icon} alt={tab.name} />
                  {/* {tab.name} */}
                </div>
              ))}
              {generateTabContent()}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Customizer;
