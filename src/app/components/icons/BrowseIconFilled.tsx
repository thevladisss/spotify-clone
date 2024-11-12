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
      <path d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V2zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333 0-1.289-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5c0 1.289 1.567 2.333 3.5 2.333z"></path>
    </svg>
  );

  return <IconWrapper>{svgCode}</IconWrapper>;
}

export default BrowseIcon;