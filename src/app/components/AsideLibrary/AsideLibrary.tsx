'use client';

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import LibraryIcon from '../icons/LibraryIcon';
import AsideCard from './AsideCard';
import AsideFooter from './AsideFooter';

function AsideLibrary(): JSX.Element {
  const asideCards = [
    {
      title: 'Create your first playlist',
      subtitle: "It's easy, we'll help you",
      buttonText: 'Create playlist',
      onButtonClick: () => {},
    },
    {
      title: "Let's find some podcasts to follow",
      subtitle: "We'll keep you updated on new episodes",
      buttonText: 'Browse podcasts',
      onButtonClick: () => {},
    },
  ];

  return (
    <aside className="px-2 pt-2 bg-primary rounded-lg h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <button className="flex items-center px-4">
            <span role="img" aria-label="Library icon" className="me-3">
              <LibraryIcon />
            </span>
            <p className="font-bold">Your Library</p>
          </button>
          <IconButton sx={{ color: grey[500] }}>
            <AddIcon />
          </IconButton>
        </div>
        <div className="my-6"></div>
        <div className="flex flex-col gap-3">
          {asideCards.map((card, index) => (
            <AsideCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              buttonText={card.buttonText}
              {...(card.onButtonClick && {
                onButtonClick: card.onButtonClick,
              })}
            />
          ))}
        </div>
      </div>
      <AsideFooter />
    </aside>
  );
}

export default AsideLibrary;
