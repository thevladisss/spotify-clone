'use client'
import {Button} from "@mui/material";
import {useEffect, useMemo} from "react";


export default function Page(props: any) {

  const artistId = useMemo(() => props.params.artistId, props.params);

  useEffect(() => {
    // getArtistById(artistId)
  }, [artistId]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      { artistId }
    </div>
  );
}
