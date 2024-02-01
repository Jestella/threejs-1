import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#999999",
  logoDecal: "./threejs.png",
});

export default state;
