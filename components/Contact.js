import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className="flex flex-col h-full  ml-2 lg:ml-0">
      <div className="lg:flex flex-grow mt-44">
        <div className="lg:w-1/2 lg:mt-8 md:ml-16  ">
          <ContactInfo />
        </div>
        <div className="lg:w-1/2 mt-8 md:ml-16">
          <FormContact />
        </div>
      </div>
      <div className="mt-5 lg:mt-4 w-1/4 mb-4 ">
        <SocialIcons />
      </div>
    </div>
  );
  
}
