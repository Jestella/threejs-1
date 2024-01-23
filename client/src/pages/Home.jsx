import Button from "../components/Button";

const Home = ({ onStartButtonClick }) => {
  const handleStartClick = () => {
    onStartButtonClick();
    console.log("show customizer");
  };
  return (
    <>
      <div className="header">
        <h1>Home</h1>
        <header>
          <img src="./threejs.png" alt="logo" width={35} />
        </header>
      </div>
      <div className="home-content">
        <h1>Custom T-Shirts</h1>
        <p>Add your logo or image</p>
        <Button title="Start" onClick={handleStartClick} />
      </div>
    </>
  );
};

export default Home;
