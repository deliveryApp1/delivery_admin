import React, { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};
const NavLink: React.FC<Props> = ({ to, children }) => {
  const activeStyle = {
    backgroundColor: "red",
    color: "#fff",
  };
  return (
    <RouterNavLink
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
