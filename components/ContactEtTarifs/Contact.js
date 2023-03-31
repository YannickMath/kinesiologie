import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";
import Tarifs from "./Tarifs";

export default function Contact() {
  return (
    <div className="flex flex-col h-full   lg:ml-0 md:mt-0 mt-8 ">
      <div className="lg:flex flex-grow mt-36">
        <div className="lg:w-1/2 lg:mt-8 md:ml-16  ">
          <ContactInfo />
          <Tarifs />
        </div>
        <div className="lg:w-1/2 mt-8 md:ml-24">
          <FormContact />
        </div>
      </div>
      <div className="mt-5 lg:mt-4 w-1/4 mb-4 md:m-0">
        <SocialIcons />
      </div>
    </div>
  );
}
