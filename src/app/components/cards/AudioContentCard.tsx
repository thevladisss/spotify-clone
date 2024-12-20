"use client";
import AppButtonFab from "@/app/components/app/AppButtonFab";
import PlayIcon from "@/app/components/icons/PlayIcon";
import React from "react";
import styles from "@/app/css/cards/AudioContentCard.module.css"
import {Box,} from "@mui/material"
import Image from "next/image";

type HomeCardProps = {
  title?: string;
  description?: string;
  imageSrc: string;
  onContextMenu?: () => void
  rounded: boolean
};
function AudioContentCard(props: HomeCardProps): JSX.Element {

  const handleContextMenu = (e) => {
    e.preventDefault()
  }


  return (
    <Box onContextMenu={handleContextMenu} className={styles.AudioContentCard}>
      <div>
        <div>
          <Image
            className={styles['AudioContentCard-Image']}
            style={props.rounded ? {borderRadius: "50%"} : {}}
            width={200}
            height={200}
            src={props.imageSrc}
            alt={props.title ? props.title : ""}
          />
          <div className={styles['AudioContentCard-PlayButton']}>
            <AppButtonFab sx={{backgroundColor: 'primary.main'}}>
              <PlayIcon color="black"></PlayIcon>
            </AppButtonFab>
          </div>
        </div>
       <div>
         <p className={styles['AudioContentCard-Title']}>
           { props.title }
         </p>
         <div>
           <span className={styles['AudioContentCard-Caption']}>{props.description}</span>
         </div>
       </div>
      </div>
    </Box>
  );
}

export default AudioContentCard;
