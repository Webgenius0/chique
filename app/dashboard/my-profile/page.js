import ProfileInfo from "@/components/dashboard/my-profile/ProfileInfo";
import PageWrapper from "@/components/dashboard/PageWrapper";


export const metadata = {
    title: "Chique | My Profile",
    description:
        "Securely access your Chique account to manage your style profile, wardrobe, and personalized recommendations.",
};
const MyProfile = () => {
    return (
        <PageWrapper>
            <ProfileInfo />
        </PageWrapper>
    )
}

export default MyProfile