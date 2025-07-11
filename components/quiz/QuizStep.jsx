const QuizStep = ({ number, question, options, onSelect, selectedOption }) => {
  return (
    <div className="w-full text-center space-y-4">
      <h2 className="max-w-6xl mx-auto text-2xl text-primary-dark font-semibold font-secondary text-start">
        {number}. {question}
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(opt)}
            className={`w-full cursor-pointer px-10 py-[22px] border border-[#4b556340] !text-xl rounded-lg text-left transition
              ${selectedOption === opt ? " " : "bg-white"}
            `}
          >
            • {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizStep;
