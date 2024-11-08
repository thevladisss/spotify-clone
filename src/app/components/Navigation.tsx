'use client';
import React, {useState} from 'react'
import AppInput from '@/app/components/app/AppInput'
import { Button, TextField} from "@mui/material";
import AppButton from "@/app/components/app/AppButton";
import HomeSearchInput from "@/app/components/HomeSearchInput";
import Image from 'next/image'

function Navigation(): JSX.Element {

  return (
    <div className="px-4 py-2 flex justify-between relative top-1 w-full bg-black">
        <div className="flex gap-8 items-center w-4/6 w-full">
          <div className="columns-2">
            <Image height={32} width={32} src="/icons/logo_spotify_white.png" alt="Logo" />
          </div>
          <div className="grow flex justify-center">
            <HomeSearchInput></HomeSearchInput>
          </div>
          <div className="flex gap-4 col-2">
            <AppButton textColor="secondary">
              Sign up
            </AppButton>
            <AppButton transparent className="py-1" size="large">
              Log in
            </AppButton>
          </div>
        </div>
    </div>
  )
}


export default Navigation
