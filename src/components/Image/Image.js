import React from "react";
import "./styles.scss";

export default function Image(props) {
  const folder = "/" + (props.folder ? props.folder : "images") + "/";

  return (
    <div className="ImageContainer">
      <img
        className="Image"
        src={process.env.PUBLIC_URL + folder + props.src}
        alt="Error!"
      />
    </div>
  );
}
