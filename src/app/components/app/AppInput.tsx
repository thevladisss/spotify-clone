import { TextField } from '@mui/material'
import React, { useMemo } from 'react'
import './AppInput.css'

function AppInput(props: Record<string, any>): JSX.Element{
    
    return (
        <TextField  color="secondary" {...props}></TextField>
    )
}

export default AppInput