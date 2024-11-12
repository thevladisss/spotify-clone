"use client";
import React, { useState } from "react";

type HomeCardProps = {
  title?: string;
  description?: string;
  imageSrc: string;
};
function HomeCard(props: HomeCardProps): JSX.Element {
  return (
    <div className="p-2 rounded-xl bg-secondary overflow-hidden">
      <div>
        <img
          style={{ height: "196px", width: "auto" }}
          src={props.imageSrc}
          alt={props.title ? props.title : ""}
        />
        <span className="max-h-full">{props.description}</span>
      </div>
    </div>
  );
}

export default HomeCard;
