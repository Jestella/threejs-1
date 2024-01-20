import { ColorPicker, FilePicker, AIPicker, Button, Tab } from "../components";

const generateTabContent = () => {
  switch (activeEditorTab) {
    case "colorpicker":
      return <ColorPicker />;
    case "filepicker":
      return <FilePicker />;
    case "aipicker":
      return <AIPicker />;
    default:
      return null;
  }
};

const Customizer = () => {
  return (
    <>
      <div className="header">
        <h1>Customizer</h1>
      </div>
      <div>pickers</div>
      <div className="home-content">home content</div>
      <div>bottom buttons</div>
    </>
  );
};

export default Customizer;
