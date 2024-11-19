"use client"
import React, {useState} from 'react'
import NavigationMobile from "@/app/components/NavigationMobile";
import NavigationDesktop from "@/app/components/NavigationDesktop";
import {useScreen} from "@/app/hooks/useScreen";

function Navigation(props: any): JSX.Element {

  const {mdAndSmaller} = useScreen()

  return (<>
    { mdAndSmaller ? <NavigationMobile /> : <NavigationDesktop /> }
  </>)
}


export default Navigation
