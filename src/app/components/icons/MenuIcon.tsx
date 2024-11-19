import React, { useMemo, useState } from "react";

function MenuIcon(props: any): JSX.Element {
  const style = useMemo(() => {
    return {
      width: props.width ? props.width + "px" : "32px",
      height: props.height ? props.height + "px" : "32px",
      color: props.color ? props.color : "white",
    };
  }, [props]);

  return (
    <svg
      fill={props.color ?? "white"}
      style={style}
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="Svg-sc-ytk21e-0 bneLcE"
    >
      <path d="M21 6H3V4h18v2zm0 14H3v-2h18v2zm0-7H3v-2h18v2z"></path>
    </svg>
  );
}

export default MenuIcon;
