import React, {useMemo} from 'react'
import {Button} from "@mui/material";

function AppButton(props: Record<string, any>): JSX.Element {

  const {children, ...propsAndAttrs} = props;

  const styles = useMemo(() => {
    return props.style ? props.style : {
      borderRadius: "16px"
    }
  }, [props.style])

  return (
    <Button className="rouned-" style={styles} {...propsAndAttrs}>
      {children}
    </Button>
  )
}


export default AppButton
