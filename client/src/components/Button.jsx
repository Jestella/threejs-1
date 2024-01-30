import state from "../store";

const Button = ({ title, handleClick, type }) => {
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#646cff",
        color: "white",
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        backgroundColor: "inherit",
        borderColor: "#646cff",
        color: "#646cff",
      };
    }
    return {};
  };

  const buttonStyle = generateStyle(type);

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {title}
    </button>
  );
};

export default Button;
