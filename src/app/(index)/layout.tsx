import React from 'react'
import Navigation from "@/app/components/Navigation";
import AsideLibrary from "@/app/components/AsideLibrary";

function MainLayout({children}: any): JSX.Element {

  return (
    <div>
      <div>
        <Navigation></Navigation>
        <div className="flex mt-1">
          <div style={{flex: "0 0 25%"}}>
            <AsideLibrary></AsideLibrary>
          </div>
          <div className="grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


export default MainLayout
