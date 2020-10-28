import React from "react";
import ImgCard from "./imgCard";

const Horizontal = ({ handle, proj }) => {
  // console.log('handle', handle)
  // console.log('proj', proj)
  return (
    <article className="container m-b3">
      <div className="row space-between">
        <div className="card proj-card2-1">
          <h4>{proj.name}</h4>
          <div className="inner-row">
            {proj.programs.map((program, index) => (
              <div className="badge badge-primary wrap m-w" key={index}>
                {program}
              </div>
            ))}
          </div>
        </div>
        <div className="card proj-card2-1">
          <p>{proj.description}</p>
        </div>
      </div>
      <div className="row center m-t">
        {proj.img.map((library, index) => (
          <ImgCard handle={handle} key={index} project={proj} i={index} />
        ))}
      </div>
    </article>
  );
};

export default Horizontal;
