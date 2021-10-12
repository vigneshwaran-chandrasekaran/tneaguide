import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  a {
    color: #ce394d;
  }
`;

type NavLinksProps = {
  children: React.ReactNode;
};

export default function NavLinks({ children }: NavLinksProps) {
  return <Div>{children}</Div>;
}
