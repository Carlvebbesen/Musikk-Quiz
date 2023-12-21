import React from 'react';

interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <header className="main-header">
      <h1>{title}</h1>
    </header>
  );
};

export default MainHeader;

  