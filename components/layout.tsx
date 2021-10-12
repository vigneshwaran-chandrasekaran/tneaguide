import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = styled.main`
  background-color: #fafafa;
  min-height: 100vh;
  max-width: 780px;
  margin: 0 auto;
  padding: 2em;
  border-radius: 5px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
