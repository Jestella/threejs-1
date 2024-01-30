import { useSnapshot } from "valtio";

import state from "../store";

import Button from "../components/Button";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {snap.intro && (
        <div className="home">
          <div className="header">
            <h1>Custom T-Shirts</h1>
            <p>Add your logo or image</p>
            <Button title="Start" handleClick={() => (state.intro = false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
