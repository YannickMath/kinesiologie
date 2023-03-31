import Menu from "./Menu";
import Footer from "./Footer";

export default function Layout({ children, isSmallScreen }) {
  return (
    <div>
      <Menu currentPage="AproposDeMoi" isSmallScreen={isSmallScreen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
