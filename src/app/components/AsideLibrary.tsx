import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import LibraryIcon from './icons/LibraryIcon'

function AsideLibrary(): JSX.Element {
  return (
    <aside className="py-2 px-2 mx-2 mb-2 bg-secondary-dark rounded-lg h-full">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center px-4">
          <span role="icon">
            <LibraryIcon></LibraryIcon>
          </span>
          <p className="m-none ml-2 font-bold">Your Library</p>
        </div>
        <div>
          <IconButton sx={{ color: grey['500'] }}>
            <AddIcon></AddIcon>
          </IconButton>
        </div>
      </div>
    </aside>
  )
}

export default AsideLibrary
