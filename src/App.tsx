import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";


function App() {
  const [textarea, setTextarea] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const counters = [
    {
      label: "Word",
      count: wordCount,
    },
    {
      label: "Characters",
      count: charCount,
    },
  ];

  const handleText = (value: string) => {
    setTextarea(value);
    setWordCount(
      value
        .replaceAll("\n", " ")
        .split(" ")
        .filter((c) => c !== "").length
    );
    setCharCount(value.length);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <textarea
            value={textarea}
            onChange={(e) => handleText(e.target.value)}
            rows={12}
            placeholder="Start Typing here..."
          ></textarea>
        </div>
        <div className="count">
          {counters.map((counter, key) => {
            return (
              <Counter key={key} title={counter.label} count={counter.count} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
