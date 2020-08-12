import React from "react";
import "./ListItemText.css";

function ListItemText({ title, secondarytitle }) {
  return (
    <div className="listItemText">
      <p className="listItemText_title">{title}</p>
      <p className="listItemText_secondtitle">{secondarytitle}</p>
    </div>
  );
}

export default ListItemText;
