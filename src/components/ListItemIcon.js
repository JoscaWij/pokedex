import React from "react";
import "./ListItemIcon.css";

function ListItemIcon({ src, alt }) {
  return <img className="listItem_icon" src={src} alt={alt} />;
}

export default ListItemIcon;
