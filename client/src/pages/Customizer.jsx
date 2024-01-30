import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

import { ColorPicker, FilePicker, Button } from "../components";
import { swatch, fileIcon } from "../assets";

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
  ];

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "color":
        return <ColorPicker />;
      case "file":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  const reader = (file) => Promise.resolve(file);

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
    });
  };

  return (
    <>
      {!snap.intro && (
        <>
          <div className="header">
            <h1>Customize it!</h1>
            <p>Choose color and upload your file</p>
            <Button title="Go Back" handleClick={() => (state.intro = true)} />
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
