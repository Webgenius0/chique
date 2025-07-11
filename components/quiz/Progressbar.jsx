const Progressbar = ({ current = 0, quizQuestions = [] }) => {
    // Calculate progress safely
    const totalQuestions = quizQuestions.length || 1; // Prevent division by zero
    const safeCurrent = Math.min(current, totalQuestions - 1); // Ensure current doesn't exceed total
    const progressPercentage = ((safeCurrent + 1) / totalQuestions) * 100;

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex items-center w-[971px]">
                {/* Left circle - Always green */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <circle cx="20" cy="20" r="20" fill="#0D0E10" />
                </svg>

                {/* Progress bar */}
                <div className="flex-1 bg-[#EBECEF] relative overflow-hidden">
                    <div
                        className="bg-primary h-[10px] transition-all duration-300"
                        style={{
                            width: `${progressPercentage}%`,
                        }}
                    ></div>
                </div>

                {/* Right circle - Gray by default, green when quiz is finished */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <circle
                        cx="20"
                        cy="20"
                        r="20"
                        fill={safeCurrent >= totalQuestions - 1 ? "" : ""}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Progressbar;