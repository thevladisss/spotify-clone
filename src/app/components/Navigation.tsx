"use client";
import React, { useState } from "react";
import AppButtonFab from "@/app/components/app/AppButtonFab";
import HomeIcon from "@/app/components/app/HomeIcon";
import LogoIcon from "@/app/components/icons/LogoIcon";
import AppButton from "@/app/components/app/AppButton";
import HomeSearchInput from "@/app/components/HomeSearchInput";
import styles from "@/app/css/Navigation.module.css"

function Navigation(): JSX.Element {

  return (
    <div className={`${styles.NavigationDesktop} p-2 flex justify-between w-full bg-black absolute top-0 left-0 z-10`}>
      <div className="flex items-center justify-between w-4/6 w-full">
        <div className="columns-auto">
          <a href="" className="m-5 block">
            <LogoIcon></LogoIcon>
          </a>
        </div>
        <div className="flex gap-1 static md:absolute left-0 justify-start md:justify-center w-full">
          {/*TODO: Do not use styles for at least border. AppButton should be customizable*/}
          <div className={`${styles['NavigationDesktop-InputContainer']} flex gap-2`}>
            <AppButtonFab
              disableRipple
              disableTouchRipple
              disableFocusRipple
              color="white"
              sx={{
                backgroundColor: "background.highlight",
                height: "48px",
                width: "48px",
                marginLeft: "8px"
              }}
            >
              <HomeIcon></HomeIcon>
            </AppButtonFab>
            <HomeSearchInput></HomeSearchInput>
          </div>
        </div>
        <div className="columns-auto flex col-2">
          <AppButton
            textColor="rgb(179, 179, 179)"
            className="mb-1"
            size="large"
            transparent
            sx={{height: "48px"}}
          >
            Sign up
          </AppButton>
          <AppButton
            color="white"
            textColor="black"
            className="py-1 mb-1"
            size="large"
          >
            Log in
          </AppButton>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
