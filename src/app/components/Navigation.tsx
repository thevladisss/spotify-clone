'use client';
import React, {useState} from 'react'
import AppButtonFab from "@/app/components/app/AppButtonFab";
import HomeIcon from "@/app/components/app/HomeIcon";
import AppButton from "@/app/components/app/AppButton";
import HomeSearchInput from "@/app/components/HomeSearchInput";
import Image from 'next/image'

function Navigation(): JSX.Element {

  return (
    <div className="p-2 flex justify-between relative w-full bg-black">
        <div className="flex gap-8 items-center justify-between w-4/6 w-full">
          <div className="columns-auto">
            <Image height={24} width={24} src="/icons/logo_spotify_white.png" alt="Logo" />
          </div>
            <div className="flex gap-2">
              {/*TODO: Do not use styles for at least border. AppButton should be customizable*/}
              <AppButtonFab disableRipple disableTouchRipple disableFocusRipple color="white" sx={{backgroundColor: "background.highlight", height: "48px", width: "48px"}}>
                <HomeIcon></HomeIcon>
              </AppButtonFab>
              <HomeSearchInput></HomeSearchInput>
            </div>
          <div className="columns-auto flex col-2">
            <AppButton textColor="rgb(179, 179, 179)" className="mb-1" size="large" transparent>
              Sign up
            </AppButton>
            <AppButton color="white" textColor="black" className="py-1 mb-1" size="large">
              Log in
            </AppButton>
          </div>
        </div>
    </div>
  )
}


export default Navigation
