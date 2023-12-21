const Header = ({ type }: { type: string }) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <h2 className=" text-4xl">{type}</h2>
    </div>
  );
};

export default Header;
