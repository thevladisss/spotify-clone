import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import LibraryIcon from './icons/LibraryIcon'

function AsideLibrary(): JSX.Element {
  return (
    <aside className="py-2 px-2 mx-2 bg-secondary-dark rounded-lg h-full">
      <div className="flex justify-between items-center">
        <button className="flex items-center px-4">
          <span role="img" aria-label="Library icon" className="me-3">
            <LibraryIcon />
          </span>
          <p className="m-0 font-bold">Your Library</p>
        </button>
        <IconButton sx={{ color: grey[500] }}>
          <AddIcon />
        </IconButton>
      </div>
    </aside>
  )
}

export default AsideLibrary
