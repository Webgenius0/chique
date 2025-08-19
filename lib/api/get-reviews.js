export async function getReviews(axiosInstance) {
    if (!axiosInstance) return null;
    try {
        const res = await axiosInstance.get("/reviews");
        return res.data?.data || [];
    } catch (err) {
        console.error("Failed to fetch reviews:", err);
        throw err;
    }
}
