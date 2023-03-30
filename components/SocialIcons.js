import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="flex justify-center w-screen items-center">
      <div className="lg:flex-1 h-px border-b border-solid border-gray-400"></div>

      <a
        href="https://www.facebook.com/people/Muriel-Mathieu-Kin%C3%A9siologue-certifi%C3%A9e-et-R%C3%A9flexologie-Cranio-Sacr%C3%A9e/100077486595759/"
        title="Muriel MATHIEU' Page Facebook"
        className="lg:w-10 w-8"
      >
        <BsFacebook aria-hidden="true" size={25} />
      </a>
      <a
        href="https://instagram.com/petillantemumu69?igshid=ZDdkNTZiNTM="
        title="Muriel MATHIEU' Page Instagram"
        className="lg:w-0 w-8"
      >
        <AiFillInstagram aria-hidden="true" size={25} />
      </a>

      <div className="lg:flex-1 h-px border-b border-solid border-gray-400"></div>
    </div>
  );
}
