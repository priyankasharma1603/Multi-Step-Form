const ProgressBar = ({ step }) => {
  return (
    <div className="flex justify-between mb-8">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className={`w-full h-2 mx-1 rounded-full ${
            step >= num ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;