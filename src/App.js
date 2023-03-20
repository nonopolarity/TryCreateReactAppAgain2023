import { useState, useEffect } from "react";
import "./App.css";

const mockedData = [
  { id: 1, title: "ha", url: "nano2.jpg" },
  { id: 2, title: "haha", url: "nano1.png" },
];

function fetch2(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockedData), 1000);
  });
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch2("someURL").then((v) => setData(v));
  }, []);

  return (
    <div className="App">
      {data == null && "Loading..."}
      {data?.map((e, i) => (
        <li key={e.id}>
          {e.title} {e.url}
        </li>
      ))}
    </div>
  );
}

export default App;
