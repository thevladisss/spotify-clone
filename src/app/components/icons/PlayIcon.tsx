import React, {useMemo, useState} from "react";

type IconProps = {
  hoverColor?: string;
  color?: string;
  size?: string;
};
function PlayIcon(props: IconProps): JSX.Element {

  const style = useMemo(() => {
    return {
      width: props.size ? props.size + "px" : "32px",
      height: props.size ? props.size + "px" : "32px",
      color: props.color ? props.color : "white",
    };
  }, [props]);


  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={style}
      fill={props.color ?? "white"}
    >
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    </svg>
  );
}

export default PlayIcon;
