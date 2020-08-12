import React from "react";
import "./ListItemText.css";

function ListItemText({ title, secondarytitle }) {
  return (
    <div className="listItemText">
      <span className="listItemText_title">{title}</span>
      <span className="listItemText_secondtitle">{secondarytitle}</span>
    </div>
  );
}

export default ListItemText;
