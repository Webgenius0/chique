import MessageScreen from "@/components/dashboard/chat/MessageScreen"
import SendMessage from "@/components/dashboard/chat/SendMessage"

export const metadata = {
  title: 'Chique | Dashboard',
  description: 'Manage your style profile, wardrobe, and personalized recommendations on Chique.',
}

export default async function Dashboard() {

  // main render
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-3 relative ">
      <MessageScreen />
      <SendMessage />
    </div>
  );
}