import Button from "./Button";
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload">Upload File</label>
        <p>{file === "" ? "No file selected" : file.name}</p>
      </div>
    </>
  );
};

export default FilePicker;
