import React from "react";
import Navigation from "@/app/components/Navigation";
import LeftSideBarDesktop from "@/app/components/LeftSideBarDesktop";

function MainLayout({ children }: any): JSX.Element {


  return (
    <div className="p-2">
      <div>
        <Navigation></Navigation>
        <div className="flex top-14 w-full gap-2 relative">
          <LeftSideBarDesktop style={{width: "338px"}}></LeftSideBarDesktop>
          <div className="grow">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
