import React, {HTMLProps} from "react";

type Props = HTMLProps<any> & {}
function IconWrapper(props: Props): JSX.Element {
  return <span {...props}>{props.children}</span>;
}

export default IconWrapper;
