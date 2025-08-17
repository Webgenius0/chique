import QuizClient from "@/components/quiz/QuizClient";
import { getQuiz } from "@/lib/api/get-quiz";

export const metadata = {
  title: "Chique | Discover Your Personal Style",
  description:
    "Take our style quiz and find your perfect fashion match. Answer 10 simple questions to find your perfect style match",
};

const Quiz = async () => {
  let quizQuestions = await getQuiz();
  console.log(quizQuestions);
  // main render
  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:gap-6 lg:gap-5 md:gap-4 gap-2.5 sm:py-16 xs:py-12 py-10 px-4">
      <QuizClient />
    </div>
  );
};
export default Quiz;