"use client";
import React, { FormEvent, SyntheticEvent, useMemo, useState } from "react";
import AppInput from "@/app/components/app/AppInput";
import SearchIcon from "@/app/components/icons/SearchIcon";
import CloseIcon from "@mui/icons-material/Close";
import BrowseIcon from "@/app/components/icons/BrowseIcon";
import { IconButton } from "@mui/material";
import styles from "@/app/css/HomeSearchInput.module.css";
import {useTheme} from "@mui/system";
function HomeSearchInput(props: Record<string, any>): JSX.Element {
  const {palette} = useTheme()

  const [input, setInput] = useState("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setInput(event.target.value);
    }
  };

  const handleClearInput = () => {
    setInput("");
  };

  const hasInput = useMemo(() => Boolean(input.length), [input]);

  const searchElementIcon = (
    <div className="IconContainer">
      <IconButton className={styles.SearchIcon} disableRipple size="medium">
        <SearchIcon color={palette.iconGrey.primary}></SearchIcon>
      </IconButton>
    </div>
  );

  const closeElementIcon = (
    <div className="IconContainer" style={{borderLeft: "1px solid grey"}}>
      <IconButton
        className={styles.CloseIcon}
        disableRipple
        size="large"
      >
        <CloseIcon color={palette.iconGrey.primary}></CloseIcon>
      </IconButton>
    </div>
  );

  const browseElementIcon = (
    <div className="IconContainer" style={{borderLeft: "1px solid grey"}}>
      <IconButton
        className={styles.BrowseIcon}
        disableRipple
        size="small"
      >
        <BrowseIcon color={palette.iconGrey.primary}></BrowseIcon>
      </IconButton>
    </div>
  );

  const endAdornment = hasInput ? closeElementIcon : browseElementIcon;

  return (
    <AppInput
      onInput={handleInput}
      size="small"
      sx={(theme) => ({ backgroundColor: theme.palette.background.highlight, color: "red" })}
      color="white"
      placeholder="What do you want to play?"
      className={styles.HomeSearchInput}
      value={input}
      slotProps={{
        input: {
          startAdornment: searchElementIcon,
          endAdornment: endAdornment,
        },
      }}
    ></AppInput>
  );
}

export default HomeSearchInput;
