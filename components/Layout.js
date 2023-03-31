import Menu from "./Menu";

export default function Layout({ children, isSmallScreen }) {
  return (
    <div>
      <Menu currentPage="AproposDeMoi" isSmallScreen={isSmallScreen} />
      <main>{children}</main>
    </div>
  );
}
