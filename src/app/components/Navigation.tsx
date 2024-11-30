"use client"
import React from 'react'
import NavigationMobile from "@/app/components/NavigationMobile";
import NavigationDesktop from "@/app/components/NavigationDesktop";
import {useScreen} from "@/app/hooks/useScreen";

function Navigation(): JSX.Element {

  const {mdAndSmaller} = useScreen()

  return (<>
    { mdAndSmaller ? <NavigationMobile /> : <NavigationDesktop /> }
  </>)
}


export default Navigation
