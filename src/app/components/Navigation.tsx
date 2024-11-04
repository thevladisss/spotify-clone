'use client';
import React, {useState} from 'react'
import AppInput from '@/app/components/app/AppInput'
import { Button, TextField} from "@mui/material";

function Navigation(): JSX.Element {

  return (
    <div className="px-4 py-2 flex justify-between fixed top-1 w-full">
        <div className="flex gap-8 items-center w-4/6 w-full">
          <div className="columns-2">
            Logo
          </div>
          <div className="grow flex justify-center">
            <AppInput></AppInput>
          </div>
          <div className="flex gap-4 col-2">
            <Button variant="outlined" color="white">
              Upload
            </Button>
            <Button className="py-1" size="large" style={{borderRadius: "20px"}} color="primary" variant="contained">
              Create account
            </Button>
          </div>
        </div>
    </div>
  )
}


export default Navigation
