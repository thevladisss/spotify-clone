'use client'
import React, {FormEvent, SyntheticEvent, useMemo, useState} from 'react'
import AppInput from "@/app/components/app/AppInput";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { IconButton } from '@mui/material';
import styles from "@/app/css/HomeSearchInput.module.css"
function HomeSearchInput(props: Record<string, any>): JSX.Element {

  const [input, setInput] = useState("")

  const handleInput = (event: FormEvent<HTMLInputElement>) => {

    if (event && event.target) {
      setInput(event.target.value)
    }
  }

  const handleClearInput = () => {
    setInput("")
  }

  const hasInput = useMemo(() => Boolean(input.length),[input]);

  const searchElementIcon = <div>
    <IconButton className={styles.SearchIcon} disableRipple size="medium">
      <SearchIcon></SearchIcon>
    </IconButton>
  </div>

  const closeElementIcon = <div>
    <IconButton onClick={handleClearInput} className={styles.CloseIcon} disableRipple size="large" color="iconGrey">
      <CloseIcon></CloseIcon>
    </IconButton>
  </div>

  const browseElementIcon = <div>
    <IconButton className={styles.BrowseIcon} disableRipple size="small" color="iconGrey">
      <BrowserUpdatedIcon></BrowserUpdatedIcon>
    </IconButton>
  </div>

  const endAdornment = hasInput ? closeElementIcon : browseElementIcon;

  return (
    <AppInput
      onInput={handleInput}
      size="small"
      style={{width: "400px"}}
      sx={(theme) => ({backgroundColor: theme.palette.background.highlight}) }
      color="white"
      placeholder="What do you want to play?"
      className={styles.HomeSearchInput}
      value={input}
      slotProps={{
        input: {
          startAdornment: searchElementIcon,
          endAdornment: endAdornment
        }
      }}
    ></AppInput>
  )
}


export default HomeSearchInput
