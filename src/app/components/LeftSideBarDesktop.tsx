import React, { HTMLProps, useMemo } from "react";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import styles from "@/app/css/LeftSideBarDesktop.module.css";
import merge from "@mui/system/merge";
import AppButton from "@/app/components/app/AppButton";
import LibraryIcon from "@/app/components/icons/LibraryIcon";
import AddIcon from "@/app/components/icons/AddIcon";

type Props = Partial<HTMLProps<any>>;

function LeftSideBarDesktop(props: Props): JSX.Element {
  const defaultClasses = "bg-background-base rounded-lg";

  const classes = `${styles.LeftSideBarDesktop} ${defaultClasses} ${props.className ?? ''}`;

  const style = useMemo(() => {
    return merge({}, props.style ?? {});
  }, [props.style]);

  return (
    <aside className={classes} style={style}>
      <header>
        <div className="flex justify-between items-center gap-2">
          <AppButton
            className="col"
            startIcon={<LibraryIcon color="var(--text-subdued)"></LibraryIcon>}
            sx={{ padding: "4px 8px !important" }}
            transparent
            color="white"
            textColor="var(--text-subdued)"
            size="large"
          >
            Your Library
          </AppButton>
          <div className="col-auto">
            <IconButton>
              <AddIcon color="var(--text-subdued)"></AddIcon>
            </IconButton>
          </div>
        </div>
      </header>
    </aside>
  );
}

export default LeftSideBarDesktop;
