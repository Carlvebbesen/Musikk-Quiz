import React from "react";

interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <header className="text-5xl flex items-center justify-center mb-10">
      <h1 className="font-bold">{title}</h1>
    </header>
  );
};

export default MainHeader;
