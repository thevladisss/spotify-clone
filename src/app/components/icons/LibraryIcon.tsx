import IconWrapper from "@/app/components/icons/IconWrapper";
import {HTMLProps, useMemo} from "react";
import merge from "@mui/system/merge";

type IconProps = HTMLProps<any> & {
  hoverColor?: string;
  color?: string;
  size?: string
}

function LibraryIcon(props: IconProps): JSX.Element {

  const style = useMemo(() => {
    const defaultStyles = {
      width: props.size ? props.size + "px" : "24px",
      height: props.size ? props.size + "px" : "24px",
      color: props.color ? props.color : "white",
    }

    return merge(defaultStyles, props.style)
  } , [props])

  const svgCode = (
    <svg
      fill={props.color ?? "white"}
      style={style}
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
    </svg>
  );

  return <IconWrapper className={props.className}>{svgCode}</IconWrapper>;
}

export default LibraryIcon;
