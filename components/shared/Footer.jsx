import Image from "next/image";
import Logo from "../common/Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // social links
  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram className="sm:text-3xl text-2xl" />,
      link: "https://www.instagram.com/accounts/emailsignup/",
    },
    { id: 2, icon: <FaTwitter className="sm:text-3xl text-2xl" />, link: "https://x.com/home" },
    { id: 3, icon: <FaLinkedin className="sm:text-3xl text-2xl" />, link: "https://www.linkedin.com/" },
    { id: 4, icon: <FaFacebookSquare className="sm:text-3xl text-2xl" />, link: "https://www.facebook.com/" },
  ];
  // items
  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Features" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Support" },
  ];

  // main ui component
  return (
    <footer className="w-full lg:py-10 py-6">
      <div className="container flex flex-col xl:gap-10 lg:gap-8 md:gap-6 gap-4 justify-start">
          {/* lgoo & copy right wrapper*/}
        <div className="w-full flex xs:flex-row flex-col sm:gap-6 xs:gap-2 gap-4 justify-between xs:items-center">
          {/* lgoo & copy right */}
          <div className="flex flex-col text-lg md:gap-4 gap-1 xs:justify-start justify-center items-start">
            <Logo className="xl:w-[160px] xs:w-[130px] w-24 xs:h-14 h-10" />
            <p className="text-base sm:text-xl"> © {currentYear} Chique AI. All rights reserved.</p>
          </div>
          {/* social links */}
          <div className="w-fit grid grid-cols-4 shrink-0 gap-3">
            {socialLinks.map((social) => (
              <a
                href={social.link}
                key={social.id}
                target="_blank"
                className="sm:w-[30px] w-6 sm:h-[30px] h-6 overflow-hidden"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className="w-full border border-[#0D0E10]" />
      </div>
      {/* footer items */}
      <div className="w-full flex xs:gap-3 gap-1.5 justify-center items-center xl:pt-10 lg:pt-8 md:pt-6 pt-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`pr-3 ${index !== items.length - 1 ? "border-r border-[#0D0E10]" : ""
              }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;