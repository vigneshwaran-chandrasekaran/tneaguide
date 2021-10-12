import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterBox>
      <div>Author: Ravishankar Ayyakkannu</div>
      <FooterLinks>
        <a
          href="https://www.facebook.com/ravidreams"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.svg"
            alt="facebook Logo"
            width={36}
            height={36}
          />
        </a>
        <a
          href="https://twitter.com/tamilravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter.svg" alt="twitter Logo" width={36} height={36} />
        </a>
      </FooterLinks>
    </FooterBox>
  );
}
