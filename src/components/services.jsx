import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Whether you're a startup seeking speed or an enterprise seeking
            scale, GraamSoft is your full-service IT partner—with a purpose. We
            cater to all industries, including but not limited to retail,
            healthcare, education, finance and manufacturing; and we do not let
            international boundaries keep us from delivering best solutions to
            complex business issues. When you choose us, you're not just
            adopting smart software, you're joining a mission to build something
            extraordinary—for your business and for Bharat.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
