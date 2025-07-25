const QuizStep = ({ number, question, options, onSelect, selectedOption }) => {
  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Question Heading - Responsive text sizes and alignment */}
      <h2 className=" md:text-2xl text-xl text-primary-dark font-semibold font-secondary text-start">
        {number}. {question}
      </h2>

      {/* Options List - Responsive padding and spacing */}
      <div className="w-full mx-auto flex flex-col gap-2 sm:gap-3 md:gap-4">
        {options.map((opt, idx) => (
          <label
            key={idx}
            className={`w-full flex justify-center items-center gap-3 lg:gap-4 lg:px-6 px-4 lg:py-4 py-3 border rounded-lg cursor-pointer transition-all text-base sm:text-lg
              ${selectedOption === opt
                ? "bg-primary-light/10 border-primary-dark"
                : "bg-white border-gray-200 hover:border-primary-dark/50"
              }
            `}
          >
            {/* Custom Rounded Checkbox - Responsive sizing */}
            <input
              type="radio"
              name={`question-${number}`}
              checked={selectedOption === opt}
              onChange={() => onSelect(opt)}
              className="
                 lg:w-5 w-4 lg:h-5 h-5 
                rounded-full border-gray-400 
                !text-primary-dark !focus:ring-primary-dark !bg-primary-dark
                shrink-0 mt-0.5 sm:mt-0
              "
            />

            {/* Option Text - Responsive padding and alignment */}
            <p className="text-primary-dark flex-1 text-start">
              {opt}
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};
export default QuizStep;