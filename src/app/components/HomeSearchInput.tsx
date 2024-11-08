'use client'
import React, {useState} from 'react'
import AppInput from "@/app/components/app/AppInput";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
function HomeSearchInput(props: any): JSX.Element {

  const [value ,setValue] = useState()
  
  const searchElementIcon = <div>
    <IconButton size="medium" color="white" style={{paddingLeft: 0}}>
      <SearchIcon></SearchIcon>
    </IconButton>
  </div>

  const closeElementIcon = <div>
    <IconButton onClick={() => {
      debugger
    }} size="medium" color="white" style={{paddingLeft: 0}}>
      <CloseIcon></CloseIcon>
    </IconButton>
  </div>

  const [isFocused, setFocused] = useState(false)

  return (
    <AppInput
      onFocus={() => {setFocused(true)}}
      onBlur={() => {setFocused(false)}}
      size="small"
      style={{width: "400px"}}
      color="white"
      slotProps={{
        input: {
          startAdornment: searchElementIcon,
          endAdornment: isFocused ? closeElementIcon : <></>,
        }
      }}
    ></AppInput>
  )
}


export default HomeSearchInput
