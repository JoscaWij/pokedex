import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <a className="listItem" href={props.href}>
      {props.children}
    </a>
  );
}

export default ListItem;
