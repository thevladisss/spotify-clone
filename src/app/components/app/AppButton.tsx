import React, { useMemo, PropsWithChildren, HTMLProps } from "react";
import { Button, ButtonProps } from "@mui/material";
import styles from "@/app/css/AppButton.module.css";
import classNames from "classnames";

type AppButtonProps = {
  transparent?: boolean;
  textColor?: string;
} & ButtonProps &
  PropsWithChildren &
  HTMLProps<any>;

function AppButton(props: AppButtonProps): JSX.Element {
  const { children, textColor, transparent, className, ...propsAndAttrs } =
    props;

  const transparentVariantProps: ButtonProps = {
    disableRipple: true,
  };

  const computedStyles = useMemo(() => {
    const allStyles: React.CSSProperties = {
      color: textColor ? textColor : "auto",
      ...(props.style ? props.style : {}),
    };

    return allStyles;
  }, [props.style, props.transparent]);

  const AppButtonClasses = classNames(
    styles.AppButton,
    className as any,
    {
      [styles.AppButton_transparent]: transparent,
    } as any,
  );

  return (
    <Button
      className={AppButtonClasses}
      style={computedStyles}
      {...{ ...propsAndAttrs, ...transparentVariantProps }}
    >
      {children}
    </Button>
  );
}

export default AppButton;
