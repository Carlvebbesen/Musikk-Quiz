import React from "react";

interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-center mb-5">
      <h1 className="font-bold text-4xl">{title}</h1>
    </header>
  );
};

export default MainHeader;
