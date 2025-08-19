"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { getQuiz } from "@/lib/api/get-quiz";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizNavigation from "./QuizNavigation";
import QuizQuestions from "./QuizQuestions";
import Loader from "../common/Loader";

const QuizClient = ({ initialQuestions }) => {
    const router = useRouter();
    const axiosInstance = axiosPrivateClient();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const queryClient = useQueryClient();
    // Query for quiz questions
    const {
        data: quizQuestions = [],
        isLoading,
        isFetching,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["quizQuestions"],
        queryFn: () => getQuiz(axiosInstance),
        initialData: initialQuestions,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        staleTime: 0,
        cacheTime: 0,
    });
    // Post answer mutation
    const postAnswer = useMutation({
        mutationKey: ["postAnswer"],
        mutationFn: async (data) => {
            const response = await axiosInstance.post("/style-quiz/answers", {
                answers: data,
            });
            return response.data;
        },
        onSuccess: (response) => {
            console.log(response);
            toast.success(response?.message || "Answer submitted successfully");
            // Invalidate user data query to refresh user profile
            queryClient.invalidateQueries({
                queryKey: ["userData"],
                exact: true,
            });
            router.push("/profile-results");
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to submit answer");
        },
    });
    // if postAnswer is in progress, show loading state
    if (postAnswer.isPending) {
        return (
            <div className="w-full h-[80vh] flex flex-col items-center justify-center gap-4">
                <Loader className={`size-10`} />
                <p className="text-lg font-semibold text-gray-700">Submitting answers</p>
            </div>
        )
    }
    // Loading screen
    if (isLoading || isFetching) {
        return (
            <div className="w-full h-[80vh] flex flex-col items-center justify-center gap-4">
                <Loader className={`size-10`} />
                <p className="text-lg font-semibold text-gray-700">Loading quiz questions...</p>
            </div>
        );
    }
    // Error screen
    if (isError) {
        return (
            <div className="w-full h-[80vh] flex flex-col items-center justify-center gap-4">
                <div className="bg-red-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Failed to load quiz</h2>
                <p className="text-gray-600 max-w-md">
                    {error?.message || "We couldn't load the quiz questions. Please try again later."}
                </p>
                <button
                    onClick={() => refetch()}
                    className="mt-4 px-6 py-2 bg-primary text-white cursor-pointer rounded-md bg-primary-dark transition-colors"
                >
                    {isLoading || isFetching ? "Retrying..." : "Retry"}
                </button>
            </div>
        );
    }
    // Current question
    const question = quizQuestions[current];
    // Handle selecting an option (single choice)
    const handleSelectOption = (optionId) => {
        setAnswers((prev) => {
            const filtered = prev.filter((a) => a.question_id !== question.id);
            return [...filtered, { question_id: question.id, option_id: optionId }];
        });
    };

    // Check if option is selected
    const isSelected = (optionId) =>
        answers.some((a) => a.question_id === question.id && a.option_id === optionId);

    // Check if current question has been answered
    const hasAnswered = answers.some((a) => a.question_id === question.id);
    // Navigation functions

    // Function to go to the next question or submit answers
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
            postAnswer.mutate(answers);
        }
    };
    // Function to go to the previous question
    const previous = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };
    // Main quiz render
    return (
        <div className="w-full flex flex-col xl:gap-6 lg:gap-5 md:gap-4 gap-2.5">
            <QuizHeader />
            <QuizProgress current={current} quizQuestions={quizQuestions} />
            <QuizQuestions
                question={question}
                isSelected={isSelected}
                handleSelectOption={handleSelectOption}
            />
            <QuizNavigation
                current={current}
                previous={previous}
                next={next}
                quizQuestions={quizQuestions}
            />
        </div>
    );
};

export default QuizClient;