import axios from "axios";

export async function getQuiz() {
    try {
        const res = await axios.get("/style-quiz/questions");
        return res.data;
    } catch (err) {
        console.error("Failed to fetch quiz:", err);
        throw err;
    }
}
