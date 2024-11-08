import {TextField, TextFieldProps} from '@mui/material'
import React, { useMemo } from 'react'
import './AppInput.css'

function AppInput(props: Record<string, any> & TextFieldProps): JSX.Element{

    return (
        <TextField {...props}></TextField>
    )
}

export default AppInput
