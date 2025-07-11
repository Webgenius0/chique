const Progressbar = ({ current = 0, quizQuestions = [] }) => {
  const totalQuestions = quizQuestions.length || 1;
  const safeCurrent = Math.min(current, totalQuestions - 1);
  const progressPercentage = ((safeCurrent + 1) / totalQuestions) * 100;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center w-full max-w-6xl">
        {/* Left circle - always filled */}
        {/* <div className="w-5 h-5 rounded-full bg-primary-dark" /> */}

        {/* Progress bar background */}
        <div className="flex-1 bg-[#EBECEF] h-[10px] rounded-full relative overflow-hidden">
          <div
            className="bg-primary-dark h-full rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Right circle - fill based on quiz state */}
        {/* <div
          className={`w-5 h-5 rounded-full ${
            safeCurrent >= totalQuestions - 1
              ? "bg-primary-dark"
              : "bg-[#EBECEF]"
          }`}
        /> */}
      </div>
    </div>
  );
};

export default Progressbar;
