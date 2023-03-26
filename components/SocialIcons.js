import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
return (
  <div className="flex justify-center w-screen items-center">
    <div className="md:flex-1 h-px border-b border-solid border-gray-400"></div>

    <a
      href="https://www.facebook.com/petillante.rose.7/"
      title="Muriel MATHIEU' Page Facebook"
      className="md:w-10 w-8"
    >
      <BsFacebook aria-hidden="true" size={25} />
    </a>
    <a
      href="https://instagram.com/petillantemumu69?igshid=ZDdkNTZiNTM="
      title="Muriel MATHIEU' Page Instagram"
      className="md:w-10 w-8"
    >
      <AiFillInstagram aria-hidden="true" size={25} />
    </a>

    <div className="md:flex-1 h-px border-b border-solid border-gray-400"></div>
  </div>
);

}
