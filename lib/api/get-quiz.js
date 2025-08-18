import { axiosPrivateServer } from "../axios.private.server";

export async function getQuiz() {
    try {
        const axiosInstance = await axiosPrivateServer();
        const res = await axiosInstance.get("/style-quiz/questions");
        return res.data?.data || [];
    } catch (err) {
        console.error("Failed to fetch quiz:", err);
        throw err;
    }
}
