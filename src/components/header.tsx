const Header = ({ type }: { type: string }) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <h2 className=" text-3xl">{type}</h2>
    </div>
  );
};

export default Header;
