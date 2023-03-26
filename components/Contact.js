import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="flex md:flex-col justify-center items-center flex-col h-screen bg-gray-50 ml-2 md:ml-0  ">
      <div className="mt-32">
        <div className="md:flex">

        <div className="md:w-1/2 items-center md:mt-10">
          <FormContact />
        </div>
        <div className="md:w-1/2 mt-7 items-center">
          <ContactInfo />
        </div>
        </div>
        <div className="mt-10 md:mt-8 w-1/4 items-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
