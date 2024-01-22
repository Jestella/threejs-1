import { useState } from "react";
import { ColorPicker, FilePicker, Button, Tab } from "../components";

const Customizer = () => {
  const [intro, setIntro] = useState(false);

  const [file, useFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");

  const EditorTabs = [
    {
      name: "colorpicker",
    },
    {
      name: "filepicker",
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

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <>
      {!intro && (
        <div>
          <div className="header">
            <h1>Customizer</h1>
          </div>
          <div>pickers</div>
          <div className="home-content">home content</div>
          <div>
            <Button title="Go Back" />
          </div>
        </div>
      )}
    </>
  );
};

export default Customizer;
