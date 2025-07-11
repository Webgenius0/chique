const QuizStep = ({ number, question, options, onSelect, selectedOption }) => {
  return (
    <div className="w-full text-center space-y-4">
      {/* Question Heading */}
      <h2 className="max-w-6xl mx-auto text-2xl text-primary-dark font-semibold font-secondary text-start">
        {number}. {question}
      </h2>

      {/* Options List */}
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        {options.map((opt, idx) => (
          <label
            key={idx}
            className={`w-full flex items-center gap-4 px-6 py-4 border rounded-lg cursor-pointer transition text-lg
              ${selectedOption === opt ? "" : "bg-white "}
            `}
          >
            {/* Custom Rounded Checkbox */}
            <input
              type="radio"
              name={`question-${number}`}
              checked={selectedOption === opt}
              onChange={() => onSelect(opt)}
              className="w-5 h-5 rounded-full border-gray-400 accent-primary-dark"
            />

            {/* Option Text */}
            <span className="text-primary-dark">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizStep;
