import IconWrapper from "@/app/components/icons/IconWrapper";
import {useMemo} from "react";

type IconProps = {
  hoverColor?: string;
  color?: string;
  size?: string
}
function BrowseIcon(props: IconProps): JSX.Element {

  const style = useMemo(() => {
    return {
      width: props.size ? props.size + "px" : "24px",
      height: props.size ? props.size + "px" : "24px",
      color: props.color ? props.color : "white",
    }
  } , [props])

  const svgCode = (
    <svg
      fill={props.color ?? "white"}
      style={style}
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
      <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
    </svg>
  );

  return <IconWrapper>{svgCode}</IconWrapper>;
}

export default BrowseIcon;
