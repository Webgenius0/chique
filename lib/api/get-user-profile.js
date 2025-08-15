import axios from "axios";
import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = process.env.AUTH_TOKEN_NAME || "chique_auth_token";

export async function getUserProfile(token = null) {
    const accessToken = token || Cookies.get(ACCESS_TOKEN_KEY);

    if (!accessToken) return null;

    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`,
        {
            headers: { Authorization: `Bearer ${accessToken}` },
        }
    );

    return response?.data?.data || null;
}
