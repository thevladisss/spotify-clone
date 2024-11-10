import React from 'react'
import Navigation from '@/app/components/Navigation'
import AsideLibrary from '@/app/components/AsideLibrary'

function MainLayout({ children }: any): JSX.Element {
  return (
    <div className="h-screen flex flex-col">
      <div className="mb-2">
        <Navigation />
        <div className="flex flex-1 overflow-hidden mt-1">
          <div className="w-1/4 overflow-y-auto">
            <AsideLibrary />
          </div>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
