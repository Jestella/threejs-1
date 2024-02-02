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
            <h1 className="text-l">Custom T-Shirts</h1>
            <Button
              title="Start"
              type="filled"
              handleClick={() => (state.intro = false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
