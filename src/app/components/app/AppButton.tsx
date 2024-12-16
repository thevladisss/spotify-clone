"use client";
import React, { useMemo, PropsWithChildren, HTMLProps } from "react";
import { Button, ButtonProps } from "@mui/material";
import styles from "@/app/css/AppButton.module.css";

type AppButtonProps = {
  transparent?: boolean;
  textColor?: string;
  bgColor?: string;
} & ButtonProps &
  PropsWithChildren &
  HTMLProps<any>;

function AppButton({
  children,
  className,
  style,
  ...props
}: AppButtonProps): JSX.Element {
  const smallSizePadding = "4px 16px",
    mediumSizePadding = "",
    largeSizePadding = "8px 32px";

  const allStyles = useMemo(() => {
    const [paddingY = "", paddingX = ""] = (
      !props.size
        ? ""
        : props.size === "small"
          ? smallSizePadding
          : props.size === "large"
            ? largeSizePadding
            : mediumSizePadding
    ).split(" ");

    const allStyles: React.CSSProperties = {
      paddingTop: paddingY,
      paddingBottom: paddingY,
      paddingLeft: paddingX,
      paddingRight: paddingX,
      ...(props.textColor ? { color: props.textColor } : {}),
      ...(props.bgColor ? { backgroundColor: props.bgColor } : {}),
      ...(style ? style : {}),
    };

    return allStyles;
  }, [style, props.textColor]);

  const classes = `${styles.AppButton} ${className ?? ""} ${props.transparent ? styles.AppButton_transparent : ""}`;

  return (
    <Button
      className={classes}
      style={allStyles}
      color={props.color}
      size={props.size}
      sx={props.sx}
    >
      {children}
    </Button>
  );
}

export default AppButton;
