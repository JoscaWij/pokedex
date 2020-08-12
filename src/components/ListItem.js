import React from "react";

function ListItem(props) {
  return <a href={props.href}>{props.children}</a>;
}

export default ListItem;
