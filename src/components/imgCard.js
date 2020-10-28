import React, { useImperativeHandle } from "react";
import { MyIframe } from "./iframe";

// const sayHi = (props) => {
//   console.log(props);
// };

const ImgCard = ({ handle, project, i }) => {
  // console.log("project is:", project);
  // console.log("i is:", i);
  let cardClass;
  if (project.img[i].width && project.img[i].width === "3-2") {
    cardClass = "card proj-card3-2";
  } else if (project.img[i].width && project.img[i].width === "3-3") {
    cardClass = "card proj-card";
  } else if (project.img[i].width && project.img[i].width === "2-1") {
    cardClass = "card proj-card2-1";
  } else {
    cardClass = "card proj-card3-1";
  }

  return (
    <div className={cardClass}>
      {project.img[i].type && project.img[i].type === "iframe" ? (
        <MyIframe />
      ) : (
        <img
          onClick={() => {
            handle(project, i);
          }}
          className="proj-img myModal"
          src={project.img[i].path}
        />
      )}
      <div className="card-body">
        {project.img[i].description ? (
          <p src={project.img[i].description} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ImgCard;
