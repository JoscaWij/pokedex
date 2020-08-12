import React from "react";
import "./ListItemAvatar.css";

function ListItemAvatar({ src, alt }) {
  return <img className="listItem_avatar" src={src} alt={alt} />;
}

export default ListItemAvatar;
