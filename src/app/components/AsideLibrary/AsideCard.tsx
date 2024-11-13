import React from 'react';
import AppButton from '../app/AppButton';

interface AsideCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const AsideCard: React.FC<AsideCardProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}): JSX.Element => {
  return (
    <div className="bg-primary-highlight rounded-lg px-5 py-4 my-2">
      <header className="mb-4 text-white flex flex-col gap-2">
        <h5 className="text-m font-bold">{title}</h5>
        <p className="text-sm">{subtitle}</p>
      </header>

      <AppButton
        textColor="black"
        size="small"
        onClick={onButtonClick}
        disabled={!onButtonClick}
      >
        {buttonText}
      </AppButton>
    </div>
  );
};

export default AsideCard;
