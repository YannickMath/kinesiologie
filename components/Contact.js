import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
      <div className="fflex-col md:flex">
        
          <div className=" md:w-1/2">
            <FormContact />
          </div>
          <div className="md:w-1/2">
            <ContactInfo />
        </div>
        <SocialIcons />
      </div>
  );
};


