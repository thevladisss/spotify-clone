import React from 'react';
import Navigation from '@/app/components/Navigation';
import AsideLibrary from '@/app/components/AsideLibrary/AsideLibrary';

function MainLayout({ children }: any): JSX.Element {
  return (
    <div className="absolute inset-0 flex flex-col mb-4">
      <Navigation />
      <div className="flex flex-1 overflow-hidden mt-1">
        <div className="max-w-sm h-full">
          <AsideLibrary />
        </div>
        <div className="flex-1 h-full">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
