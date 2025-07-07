import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}