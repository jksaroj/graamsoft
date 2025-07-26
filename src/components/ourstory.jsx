import React from "react";

export const OurStory = (props) => {
  return (
    <div id="ourstory">
      <div className="container">
        <div className="row">
          <div className="full-width">
            <div className="about-text">
              <h2>Our Story</h2>
              <h3>{props.data ? props.data.heading : "Loading..."}</h3>
              <p>{props.data ? props.data.paragraph_1 : "Loading..."}</p>
              <p>{props.data ? props.data.paragraph_2 : "Loading..."}</p>
              <p>{props.data ? props.data.paragraph_3 : "Loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.story_points.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>{props.data ? props.data.paragraph_4 : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};
