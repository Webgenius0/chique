"use client";
import Image from "next/image";
import logo from "@/public/images/logo/chique_mini_logo.png";
import AuthWrapper from "@/components/auth/AuthWrapper";
import AuthTitle from "@/components/auth/AuthTitle";
import AuthSubText from "@/components/auth/AuthSubText";
import CommonBtn from "@/components/common/CommonBtn";
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/auth/sign-in");
  };
  return (
    <div className="container min-h-screen py-32 flex justify-center items-center">
      <AuthWrapper>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* logo icon */}
          <div className="size-14">
            <Image alt="Logo" src={logo} className="w-full h-full" />
          </div>
          {/* welcome header */}
          <div className="space-y-2">
            <AuthTitle title="Welcome to Chique" />
            <AuthSubText text="Your Chique.AI personal assistant" />
          </div>
          {/* welcome text */}
          <AuthSubText
            className="text-[rgba(0,0,0,0.80)] text-center text-base font-medium"
            text="We’re going to ask a few quick questions about your health and lifestyle to create a plan tailored just for you."
          />
          {/* start button */}
          <CommonBtn className={"max-w-32"} type="submit" onclick={handleNavigate}>
            Start
          </CommonBtn>
        </div>
      </AuthWrapper>
    </div>
  );
};
export default WelcomePage;
