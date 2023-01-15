import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/container.css";
import "../../styles/homePage.css";
import { useState, useEffect } from "react";

function Section() {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.mediastack.com/v1/news?access_key=797193499c5aaf4c93ce6c9a861591e7&languages=en&countries=us&limit=30"
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
      <h2 className="header" id="header">BoredApp</h2>
      <div className="boxContainer">
        <div>
          {data &&
            data.map((newsData) => {
              return (
                <div className="box-l" key={newsData.url}>
                  <h3 className="newsHeaders">{newsData.title}</h3>
                  <img src={newsData.image} alt="" className="images" />
                  <p className="description">{newsData.description}</p>
                  <a href={newsData.url} target="blank">
                    {" "}
                    <button className="btn">Read More</button>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <button className="btn"><a href="#header">Back to top</a></button>
    </div>
  );
}

export default Section;
