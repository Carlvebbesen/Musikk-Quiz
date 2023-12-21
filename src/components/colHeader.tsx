const ColHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-red-500 text-center self-center h-40">
      <h2 className="">{title}</h2>
    </div>
  );
};

export default ColHeader;
