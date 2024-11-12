import React, { HTMLProps, PropsWithChildren, useState } from "react";
import { Fab, FabProps, Button } from "@mui/material";
import styles from "@/app/css/AppButtonFab.module.css";
import classNames from "classnames";

type AppButtonFabProps = {
  iconSize?: string;
} & FabProps &
  PropsWithChildren &
  HTMLProps<any>;

function AppButtonFab(props: AppButtonFabProps): JSX.Element {
  const { className, children, ...propsAndAttrs } = props;

  const AppButtonClasses = classNames(styles.AppButtonFab, className as any);

  return (
    <Button
      className={AppButtonClasses}
      {...propsAndAttrs}
      style={{
        minWidth: "48px",
        height: "48px",
        width: "48px",
        borderRadius: "50%",
      }}
    >
      <span style={{ width: props.iconSize, height: props.iconSize }}>
        {children}
      </span>
    </Button>
  );
}

export default AppButtonFab;
