const ColHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center h-24 mb-5">
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

export default ColHeader;
