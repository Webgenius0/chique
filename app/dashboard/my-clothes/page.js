import OutfitSuggestion from "@/components/dashboard/clothe/OutfitSuggestion";
import Wardrobe from "@/components/dashboard/clothe/Wardrobe";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { getWardrobe } from "@/lib/api/get-wardrobe";
import { axiosPrivateServer } from "@/lib/axios.private.server";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { cookies } from "next/headers";

// meta data
export const metadata = {
  title: "Chique | My Clothes",
  description:
    "Your Personal Style Assistant. Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique AI.",
};

const MyClothes = async () => {
  const queryClient = new QueryClient();
  const cookieStore = await cookies();
  const token = cookieStore.get(process.env.AUTH_TOKEN_NAME)?.value;
  const axiosInstance = await axiosPrivateServer();

  if (token) {
    // Prefetch wardrobe server-side with token in headers
    await queryClient.prefetchQuery({
      queryKey: ["wardrobe", token],
      queryFn: () =>
        getWardrobe(axiosInstance, {
          params: { page: 1 }
        }),
    });
    // ✅ Log prefetched data
    const prefetchedData = queryClient.getQueryData(["wardrobe", token]);
    console.log("Prefetched wardrobe data:", prefetchedData);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageWrapper>
        <Wardrobe />
        <OutfitSuggestion />
      </PageWrapper>
    </HydrationBoundary>
  );
};

export default MyClothes;
