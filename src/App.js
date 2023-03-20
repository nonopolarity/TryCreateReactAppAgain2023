import { useState, useEffect } from "react";
import "./App.css";

const mockedData = Array.from({ length: 12 }, (e, i) => {
  return {
    id: i,
    title: `title ${i + 1}`,
    url: i % 2 === 0 ? "nano1.png" : "nano2.jpg",
  };
});

// [
//   { id: 1, title: "ha", url: "nano2.jpg" },
//   { id: 2, title: "haha", url: "nano1.png" },
// ];

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
        <div className="grid-box" key={e.id}>
          <img src={e.url} />
          {e.title}
        </div>
      ))}
    </div>
  );
}

export default App;
