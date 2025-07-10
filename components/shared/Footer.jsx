import Image from "next/image";
import Logo from "../common/Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/accounts/emailsignup/",
    },
    { id: 2, icon: <FaTwitter />, link: "https://x.com/home" },
    { id: 3, icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { id: 4, icon: <FaFacebookSquare />, link: "https://www.facebook.com/" },
  ];

  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Features" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Support" },
  ];
  return (
    <footer className="w-full py-10">
      <div className="container flex flex-col gap-10 justify-start">
        <div className="w-full flex gap-6 justify-between items-center">
          <div className="flex flex-col text-lg gap-4 justify-start items-start">
            <Logo className="w-40 h-11" />
            <p> © {currentYear} Chique AI. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {socialLinks.map((social) => (
              <a
                href={social.link}
                key={social.id}
                target="_blank"
                className="w-6 h-6  overflow-hidden"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <hr className="w-full border border-[#0D0E10]" />
      </div>
      <div className="w-full flex gap-3 justify-center items-center pt-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`pr-3 ${
              index !== items.length - 1 ? "border-r border-[#0D0E10]" : ""
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
