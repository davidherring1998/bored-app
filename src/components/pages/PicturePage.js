import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/container.css";
import "../../styles/homePage.css";
import "../../styles/photoPage.css";
import { useState, useEffect } from "react";


function Section() {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(null);

  const btnHandler = () => {
    setBtn(true);
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=jNMpXv_dFmNIsQF4S_uVFpMJd4ODiBJwQvqIzExvOuI&per_page=30&order_by=popular"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("request failed");
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [btn]);

  return (
    <div>
      <h2 className="header" id="header">Photography</h2>
      {data &&
        data.map((photoData) => {
          console.log(photoData.user);
          return (
            <div key={photoData.id} className="box-l" id="photo-box">
              <img src={photoData.urls.full} alt="" className="images" />
              <div className='bio' >{photoData.user.bio}</div>
              <a href={photoData.user.portfolio_url} target="blank">
                {" "}
                <button className="btn">More</button>
              </a>
            </div>
          );
        })}
       <button className="btn"><a href="#header">Back to top</a></button>
    </div>
  );
}

export default Section;
