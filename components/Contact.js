import SocialIcons from "./SocialIcons";
import FormContact from "./FormContact";
import ContactInfo from "./ContactInfo";

const Contact = ({ nom, email, adresse }) => {
  return (
    <section className="contact">
      <div className="contactWrap container">
        <div className="row md:flex">
          <div className="col-12 col-lg-6 md:w-1/2">
            <FormContact />
          </div>
          <div className="col-12 col-lg-6 md:w-1/2">
            <ContactInfo nom={nom} adresse={adresse} email={email} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
