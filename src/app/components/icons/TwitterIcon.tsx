import React, { useMemo } from "react";

function TwitterIcon(props: any): JSX.Element {
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
      className="Svg-sc-ytk21e-0 dCAvla"
    >
      <path d="M13.54 3.889a2.968 2.968 0 0 0 1.333-1.683 5.937 5.937 0 0 1-1.929.738 2.992 2.992 0 0 0-.996-.706 2.98 2.98 0 0 0-1.218-.254 2.92 2.92 0 0 0-2.143.889 2.929 2.929 0 0 0-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 0 1-3.484-.932A8.536 8.536 0 0 1 1.532 2.54a2.993 2.993 0 0 0-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 0 1-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 0 0 1.739 1.048 2.937 2.937 0 0 1-1.365.056 2.94 2.94 0 0 0 1.063 1.5 2.945 2.945 0 0 0 1.77.603 5.944 5.944 0 0 1-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 0 0 5.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 0 0 1.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 0 0 .738-1.988 8.417 8.417 0 0 0 .246-2.429 6.177 6.177 0 0 0 1.508-1.563c-.56.249-1.14.407-1.738.476z"></path>
    </svg>
  );
}

export default TwitterIcon;
