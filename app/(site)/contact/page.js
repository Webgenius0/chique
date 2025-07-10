import ContactForm from "@/components/auth/ContactForm";

export const metadata = {
  title: "Chique | Contact Us",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const Contact = () => {
  return (
    <div className="container min-h-screen py-10 flex justify-center items-center">
      <ContactForm />
    </div>
  );
};
export default Contact;
