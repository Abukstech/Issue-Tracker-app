"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import clasnames from "classnames";
import { AiFillBug } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentpage = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues/list" },
  ];

  return (
    <nav className=" border-b mb-5 px-6 py-3 ">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clasnames({
                      "text-zinc-900": currentpage === link.href,
                      "text-zinc-500": currentpage !== link.href,
                      "hover:text-zinc-800 transition-colors": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Logout</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
