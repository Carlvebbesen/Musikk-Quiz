const ColHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center h-1/6 mb-10 underline">
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

export default ColHeader;
