"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clasnames from "classnames";

const NavBar = () => {
  const currentpage = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-6 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clasnames({
              "text-zinc-900": currentpage === link.href,
              "text-zinc-500": currentpage !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
