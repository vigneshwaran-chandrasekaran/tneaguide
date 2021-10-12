import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  a {
    color: #ce394d;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

type NavLinksProps = {
  children: React.ReactNode;
};

export default function NavLinks({ children }: NavLinksProps) {
  return <Div>{children}</Div>;
}
