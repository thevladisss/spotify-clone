import React, {useState} from 'react'
import {Typography} from "@mui/material";
import AppButton from "@/app/components/app/AppButton";

function NotFound(props: any): JSX.Element {

  return (
    <div>
      <Typography>
        Page not found
      </Typography>
      <Typography>
        We can't seem to find the page you are looking for
      </Typography>
      <div className="flex gap-2">
        <AppButton>
          Home
        </AppButton>
        <AppButton transparent>
          Help
        </AppButton>
      </div>
    </div>
  )
}


export default NotFound
