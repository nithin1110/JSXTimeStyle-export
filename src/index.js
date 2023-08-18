import React from "react";
import ReactDOM from "react-dom";
const date = new Date(2023, 1, 1, 23);
const time = date.getHours();
let greeting;
let customColor;
if (time < 12) {
  greeting = "Good Morning";
  customColor = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  customColor = "blue";
} else {
  greeting = "Good Night";
  customColor = "green";
}
const greetingstyle = {
  color: customColor
};

ReactDOM.render(
  <h1 style={greetingstyle}>{greeting}</h1>,
  document.getElementById("root")
);
