import React from "react";
import "./history.css";
import logo from "../../assets/logo.png";
import { Clock } from "phosphor-react";
const History = () => {
  return (
    <div class="card">
      <img class="image" src={logo} alt="Example Image" />
      <div class="content">
        <h2>Headline</h2>
        <p>
          This is the body text of the card. It can contain multiple paragraphs
          or any other HTML content.
        </p>
        <div class="button-container">
          <button class="button">Click me</button>
        </div>
      </div>
    </div>
  );
};

export default History;
