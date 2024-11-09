'use client';
import React, {useState} from 'react'
import AppInput from '@/app/components/app/AppInput'
import { Button, TextField} from "@mui/material";
import AppButton from "@/app/components/app/AppButton";
import HomeSearchInput from "@/app/components/HomeSearchInput";
import Image from 'next/image'

function Navigation(): JSX.Element {

  return (
    <div className="p-2 flex justify-between relative w-full bg-black">
        <div className="flex gap-8 items-center justify-between w-4/6 w-full">
          <div className="columns-auto">
            <Image height={32} width={32} src="/icons/logo_spotify_white.png" alt="Logo" />
          </div>
            <HomeSearchInput></HomeSearchInput>
          <div className="columns-auto flex col-2">
            <AppButton textColor="rgb(179, 179, 179)" className="mb-1" transparent>
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
