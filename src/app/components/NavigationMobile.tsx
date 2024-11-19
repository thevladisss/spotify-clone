"use client"
import React, {useState} from 'react'
import styles from "@/app/css/Navigation.module.css";
import LogoIcon from "@/app/components/icons/LogoIcon";
import SearchIcon from "@/app/components/icons/SearchIcon";
import AppButton from "@/app/components/app/AppButton";
import MenuIcon from "@/app/components/icons/MenuIcon";

function NavigationMobile(props: any): JSX.Element {

  return (
    <div className={`${styles.NavigationMobile} p-4 flex justify-between w-full bg-black absolute top-0 left-0 z-10`}>
      <div className="flex items-center justify-between w-4/6 w-full">
        <div className="columns-auto">
          <a href="" className="block">
            <LogoIcon></LogoIcon>
          </a>
        </div>
        <div className="flex items-center">
          <SearchIcon width={16} height={16}></SearchIcon>
          <AppButton
            color="white"
            textColor="black"
            size="large"
            sx={{
              height: "32px",
              width: "93.2px",
              fontSize: "13px",
              paddingLeft: "16px !important",
              paddingRight: "16px !important",
              paddingTop: "4px !important",
              paddingBottom: "4px !important",
            }}
          >
            Open App
          </AppButton>
          <MenuIcon width={24} height={24}></MenuIcon>
        </div>
      </div>
    </div>
  )
}


export default NavigationMobile
