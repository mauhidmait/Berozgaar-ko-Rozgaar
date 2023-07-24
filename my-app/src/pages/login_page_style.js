import blueGradient from "../assests/blueGradient.jpg";
import womenWithTab from "../assests/womenWithTab.jpg";

export const rightSide = {
  backgroundImage: `url(${blueGradient})`,
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const womenStyle = {
  width: "375px",
  height: "375px",
  padding: "1rem",
  background: `url(${womenWithTab}) no-repeat`,
  backgroundSize: "contain",
  position: "relative",
  borderRadius: "20px",
};

export const leftSide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#e7eff9",
  backgroundImage: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)",
  width: "100%",
  height: "100vh",
};

export const content = {
  padding: "1rem",
  width: "300px",
  padding: "1.5rem",
  borderRadius: "1.5rem",
};

export const textRightSide = {
  position: "absolute",
  width: "200px",
  height: "200px",
  fontSize: "1.25rem",
  fontFamily: "'Lumanosimo', 'cursive'",
};

export const mainGrid = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  height: "100vh",
};
