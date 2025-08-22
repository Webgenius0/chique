
const QuizNavigation = ({ previous, next, current, quizQuestions,hasAnswered,isSelected }) => {
    return (
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
                disabled={!hasAnswered || !isSelected}
                className="px-6 py-3 bg-black text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            >
                {current === quizQuestions.length - 1 ? "Submit" : "Next"}
            </button>
        </div>
    )
}

export default QuizNavigation