import IconWrapper from "@/app/components/icons/IconWrapper";
import {HTMLProps, useMemo} from "react";
import merge from "@mui/system/merge";

type IconProps = HTMLProps<any> & {
  hoverColor?: string;
  color?: string;
  size?: string
}

function AddIcon(props: IconProps): JSX.Element {

  const style = useMemo(() => {
    const defaultStyles = {
      width: props.size ? props.size + "px" : "16px",
      height: props.size ? props.size + "px" : "16px",
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
      viewBox="0 0 16 16"
    >
      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
    </svg>
  );

  return <IconWrapper className={props.className}>{svgCode}</IconWrapper>;
}

export default AddIcon;
