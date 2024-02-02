import Button from "./Button";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="filepicker">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label text-s">
          Upload File
        </label>
        <p className="file-name text-xs">
          {file === "" ? "No file selected" : file.name}
        </p>
        <Button type="outline" title="Submit" handleClick={() => readFile()} />
      </div>
    </div>
  );
};

export default FilePicker;
