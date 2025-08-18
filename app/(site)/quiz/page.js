import QuizClient from "@/components/quiz/QuizClient";
import { getQuiz } from "@/lib/api/get-quiz";
import { axiosPrivateServer } from "@/lib/axios.private.server";

export const metadata = {
  title: "Chique | Discover Your Personal Style",
  description:
    "Take our style quiz and find your perfect fashion match. Answer 10 simple questions to find your perfect style match",
};

const Quiz = async () => {
  const axiosInstance = await axiosPrivateServer();
  let quizQuestions = [];
  try {
    quizQuestions = await getQuiz(axiosInstance);
  } catch (err) {
    console.error("Failed to fetch quiz:", err);
    throw err;
  }
  // console.log(quizQuestions);
  // main render
  return (
    <div className="max-w-6xl container flex flex-col sm:py-16 xs:py-12 py-10">
      <QuizClient initialQuestions={quizQuestions} />
    </div>
  );
};
export default Quiz;