import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ReactLenis } from "lenis/react";
export default function MainLayout({ children }) {
  return (
    <ReactLenis root>
      <Header />
      <main className="w-full min-h-screen">
        {children}
      </main>
      <Footer />
    </ReactLenis>
  );
}
