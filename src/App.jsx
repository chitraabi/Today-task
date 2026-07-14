import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("black");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
      }}
    >
      <h1 style={{ color: color }}>
        Toggle Button & Color Changer
      </h1>

      <h2>
        Switch is {status ? "ON" : "OFF"}
      </h2>

      {/* Activity 3 */}
      <h3>
        {status
          ? "Welcome! The switch is turned ON."
          : "The switch is currently OFF."}
      </h3>

      <button onClick={() => setStatus(!status)}>
        Toggle
      </button>

      <br /><br />

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button
        onClick={() => setColor("green")}
        style={{ marginLeft: "10px" }}
      >
        Green
      </button>

      <button
        onClick={() => setColor("blue")}
        style={{ marginLeft: "10px" }}
      >
        Blue
      </button>

      {/* Activity 1 */}

      <button
        onClick={() => setColor("pink")}
        style={{ marginLeft: "10px" }}
      >
        Pink
      </button>

      <button
        onClick={() => setColor("orange")}
        style={{ marginLeft: "10px" }}
      >
        Orange
      </button>

      <br /><br />

      {/* Activity 2 */}

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;