import Link from "next/link"; //import this
import React from "react";
import styled from "styled-components";

const A = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #0782de;
  cursor: pointer;
`;

type SourceLinkProps = {
  href: string;
  children: React.ReactText;
};

export default function SourceLink({ href = "/", children }: SourceLinkProps) {
  return (
    <Link href={href}>
      <A>{children}</A>
    </Link>
  );
}
