import React from "react";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div className="header">
        <h1>Home</h1>
      </div>
      <div className="home-content">
        <h1>Custom T-Shirts</h1>
        <p>Add your logo or image</p>
        <button onClick={handleClick}>Customize it</button>
      </div>
    </>
  );
};

export default Home;
