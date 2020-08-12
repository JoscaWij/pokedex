import React from "react";

function ListItemIcon(props) {
  return (
    <img src={props.src} alt={props.alt}>
      {props.children}
    </img>
  );
}

export default ListItemIcon;
