import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {IconButton} from "@mui/material";
import {grey} from "@mui/material/colors";

function AsideLibrary(): JSX.Element {

  return (
    <aside className="py-2 px-2 bg-secondary-dark flex justify-between items-center rounded-lg">
      <div className="flex justify-between items-center px-4">
        <span role="icon">
        I
      </span>
        <p className="m-none ml-2">
          Your Library
        </p>
      </div>
      <div>
        <IconButton sx={{color: grey["500"]}}>
          <AddIcon></AddIcon>
        </IconButton>
      </div>
    </aside>
  )
}


export default AsideLibrary
