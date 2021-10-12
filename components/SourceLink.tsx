import Link from "next/link"; //import this
import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #0782de;
  cursor: pointer;
`;

type SourceLinkProps = {
  href: string;
  target?: string;
  children: React.ReactText;
};

export default function SourceLink({
  href = "/",
  children,
  target = "_self",
}: SourceLinkProps) {
  return (
    <Link href={href} passHref>
      <StyledLink target={target}>{children}</StyledLink>
    </Link>
  );
}
