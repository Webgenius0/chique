"use client";

import { useState } from "react";
import Progressbar from "@/components/quiz/Progressbar";
import QuizStep from "@/components/quiz/QuizStep";
import { quizQuestions } from "@/data/db";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelectOption = (option) => {
    setAnswers({ ...answers, [quizQuestions[current].id]: option });
    console.log("Selected Answers:", answers);
  };

  const next = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      toast.success("Quiz Completed!");
      console.log("Final Answers:", answers);
    }
  };

  const previous = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
    console.log("Current question:", current);
  };

  const currentQuestion = quizQuestions[current];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="container flex flex-col gap-6 sm:py-16 xs:py-12 py-10">
      {/* Title Section */}
      <div className="w-full flex flex-col gap-5 pb-16">
        <p className="text-center font-secondary text-primary-dark text-5xl font-semibold">
          Discover Your Personal Style
        </p>
        <p className="text-base font-primary text-primary-dark text-center">
          Answer 10 simple questions to find your perfect style match
        </p>
      </div>

      {/* Progressbar */}
      <Progressbar current={current} quizQuestions={quizQuestions} />

      {/* Quiz Step */}
      <QuizStep
        number={current + 1}
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelect={handleSelectOption}
        selectedOption={answers[currentQuestion.id]}
      />

      {/* Navigation Buttons */}
      <div className="px-44 mt-6 flex justify-between items-center">
        {current > 0 && (
          <button
            onClick={previous}
            className="cursor-pointer border px-4 py-2 rounded text-primary hover:bg-gray-100"
          >
             {"< Previous"}
          </button>
        )}

        <div className={current === 0 ? "ml-auto" : ""}>
          <button
            onClick={next}
            className="cursor-pointer bg-primary-dark text-white px-4 py-2 rounded "
            disabled={
              currentQuestion.is_required &&
              !currentAnswer
            }
          >
            {current === quizQuestions.length - 1
              ? "Get My Style Results"
              : "Next >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
