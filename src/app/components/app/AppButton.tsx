import React, {useMemo, PropsWithChildren, HTMLProps} from 'react'
import {Button, ButtonProps} from "@mui/material";

type AppButtonProps =  {
  transparent?:boolean
} & ButtonProps & PropsWithChildren & HTMLProps<any>



function AppButton(props: AppButtonProps): JSX.Element {

  const {children, ...propsAndAttrs} = props;

  const styles = useMemo(() => {
    if (props.style) return props.style;

    const allStyles: React.CSSProperties = {
      borderRadius: "20px",
      padding: "8px 28px"
    }

    if (props.transparent) {
        allStyles.color = "white"
        allStyles.backgroundColor = "transparent";
    }

    return allStyles;
  }, [props.style, props.transparent])

  return (
    <Button style={styles} {...propsAndAttrs}>
      {children}
    </Button>
  )
}


export default AppButton
