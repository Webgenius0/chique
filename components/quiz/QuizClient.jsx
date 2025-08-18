"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Progress, message } from "antd";
import toast from "react-hot-toast";

const QuizClient = ({ quizQuestions = [] }) => {
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const question = quizQuestions[current];

    // ✅ Handle selecting an option (single choice)
    const handleSelectOption = (optionId) => {
        setAnswers((prev) => {
            const filtered = prev.filter((a) => a.question_id !== question.id);
            return [...filtered, { question_id: question.id, option_id: optionId }];
        });
    };

    // ✅ Check if option is selected
    const isSelected = (optionId) =>
        answers.some(
            (a) => a.question_id === question.id && a.option_id === optionId
        );

    // ✅ Get current answer (for validation)
    const hasAnswered = answers.some((a) => a.question_id === question.id);

    // ✅ Navigation
    const next = () => {
        if (!hasAnswered) {
            toast.error("Please select an option to continue.");
            return;
        }

        if (current < quizQuestions.length - 1) {
            setCurrent((prev) => prev + 1);
        } else {
            if (answers.length !== quizQuestions.length) {
                toast.error("Please answer all questions before submitting.");
                return;
            }
            console.log("Final Answers:", answers);
        }
    };
    // ✅ Go to previous question
    const previous = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };
    // ✅ If no questions are available, show loading state
    if (!question) {
        return (
            <div className="w-full flex justify-center items-center">
                <p className="text-lg">Loading questions...</p>
            </div>
        );
    }
    // Main render
    return (
        <div className="w-full flex flex-col gap-6">
            {/* Title */}
            <div className="w-full flex flex-col justify-start items-center gap-2">
                <p className="font-secondary text-primary-dark text-3xl font-semibold">
                    Discover Your Personal Style
                </p>
                <p className="text-base font-primary text-primary-dark">
                    Answer 10 simple questions to find your perfect style match
                </p>
            </div>

            {/* Progress */}
            <div className="w-full flex flex-col gap-2 justify-start items-start">
                <p className="text-lg">
                    Question <b>{current + 1}</b> / {quizQuestions.length}
                </p>
                <Progress
                    showInfo={false}
                    strokeColor="#000"
                    percent={((current + 1) / quizQuestions.length) * 100}
                />
            </div>

            {/* Question */}
            <div className="w-full flex flex-col gap-2 justify-start items-start">
                <h2 className="text-xl font-semibold mb-4">{question.question_text}</h2>
                <div className="flex w-full flex-col gap-3">
                    {question.options.map((opt) => (
                        <label
                            key={opt.id}
                            className={`flex items-center gap-3 border rounded-md px-3 py-5 cursor-pointer transition ${isSelected(opt.id)
                                ? "border-black bg-gray-100"
                                : "border-gray-300 hover:border-black"
                                }`}
                        >
                            <input
                                className="accent-black"
                                type="radio"
                                name={`question-${question.id}`}
                                checked={isSelected(opt.id)}
                                onChange={() => handleSelectOption(opt.id)}
                            />
                            {opt.option_text}
                        </label>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex w-full items-center gap-3 justify-between">
                <button
                    onClick={previous}
                    disabled={current === 0}
                    className="px-6 py-3 border rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <button
                    onClick={next}
                    className="px-6 py-3 bg-black text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                >
                    {current === quizQuestions.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default QuizClient;
