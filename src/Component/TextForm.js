import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const readText = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

  // Credits: A
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          onClick={readText}
          className={`btn btn-${props.mode === "dark" ? "primary" : "success"} mx-1 my-1`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-volume-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8" />
          </svg>
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
