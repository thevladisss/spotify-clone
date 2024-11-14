import Link from 'next/link';
import React from 'react';
import AppButton from '../app/AppButton';
import LanguageIcon from '../icons/LanguageIcon';

function AsideFooter(): JSX.Element {
  return (
    <div className="text-[11px] text-[#B3B3B3] px-6">
      <div className="my-8">
        <div className="flex flex-wrap">
          <Link className="me-4 mt-1 mb-2" href={''}>
            Legal
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Safety & Privacy Center
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Privacy Policy
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Cookies
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            About Ads
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Accessibility
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Notice at Collection
          </Link>
          <Link className="me-4 mt-1 mb-2" href={''}>
            Your Privacy Choices
          </Link>
        </div>

        <Link className="me-4 mt-1 mb-2 text-white" href={''}>
          Cookies
        </Link>
      </div>

      <div className="mb-8">
        <AppButton textColor="black" size="xs" outline={true}>
          <span className="me-1">
            <LanguageIcon />
          </span>
          <span className="font-bold text-white">English</span>
        </AppButton>
      </div>
    </div>
  );
}

export default AsideFooter;
