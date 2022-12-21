import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/container.css";
import "../../styles/homePage.css"
import { useState, useEffect } from "react";

// a64790d61c1f816b25f98560a9b38169

function Section() {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(null)

  const btnHandler = () => {
    setBtn(true)
  }

  useEffect(() => {
    fetch(
      "http://api.mediastack.com/v1/news?access_key=797193499c5aaf4c93ce6c9a861591e7&languages=en&countries=us&limit=25"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("request failed");
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [btn]);

  return (
    <div>
      <h2 className="header">Headlines</h2>
      <div className="boxContainer">
        <div>
          {data &&
            data.map((newsData) => {
              return (
                <div className="box" key={newsData.url}>
                  {newsData.description}
                  <a href={newsData.url} target="blank">
                    {" "}
                    <button className="btn">View</button>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <button onChange={btnHandler} className="btn">More</button>
    </div>
  );
}

export default Section;
