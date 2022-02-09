import "./App.css";
import data from "./data";
import React, { useState } from "react";
import Tour from "./tour";
function App() {
  const [tours, setTours] = useState(data);
  const deleteTour = (id) => {
    const update = tours.filter((tour) => tour.id !== id);
    setTours(update);
  };
  return (
    <div className="App">
      <div className="title">
        <h2>{tours.length > 0 ? "Our tours" : "No tours found"}</h2>
        <div className="underline"></div>
      </div>
      <section>
        {tours.map((tour) => {
          return <Tour tour={tour} deleteTour={deleteTour}></Tour>;
        })}
      </section>
    </div>
  );
}

export default App;
