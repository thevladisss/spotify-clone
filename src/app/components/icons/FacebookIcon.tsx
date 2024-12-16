import React, { useMemo } from "react";

function FacebookIcon(props: any): JSX.Element {
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
      viewBox="0 0 16 16"
      className="Svg-sc-ytk21e-0 dYnaPI"
    >
      <path d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8z"></path>
    </svg>
  );
}

export default FacebookIcon;
