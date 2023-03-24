import React from "react";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      <main>{children}</main>
    </div>
  );
}
