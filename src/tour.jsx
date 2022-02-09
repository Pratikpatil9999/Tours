import React, { useState } from "react";

const Tours = ({ tour, deleteTour }) => {
  const [btn, setBtn] = useState(0);
  const changeBtn = () => {
    const current = btn;
    setBtn((current + 1) % 2);
  };
  return (
    <article className="single-tour" id={tour.id}>
      <img src={tour.img} alt="" className="img" />
      <footer>
        <div className="tour-info">
          <h4>{tour.title}</h4>
          <h4 className="tour-price">$ {tour.price}</h4>
        </div>
        <p>
          {btn === 1
            ? tour.description
            : `${tour.description.substring(0, 200)}...`}
          <button onClick={changeBtn} className="btn-change">
            {btn === 1 ? "show less" : "show more"}
          </button>
        </p>
        <button className="btn-notInter" onClick={() => deleteTour(tour.id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tours;
