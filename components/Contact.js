import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div className=" bg-gray-50 ml-2 lg:ml-0  ">
      <div className="mt-44">
        <div className="lg:flex ">

        <div className="lg:mt-8 lg:w-1/2  ">
          <FormContact />
        </div>
        <div className="lg:w-1/2  ">
          <ContactInfo />
        </div>
        </div>
        <div className="mt-10 lg:mt-4 w-1/4 ">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
