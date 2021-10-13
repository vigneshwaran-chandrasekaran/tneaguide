import Link from "next/link"; 
import React from 'react';
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-block;
  margin: 0 5px;
  padding: 5px;
  text-decoration: none;
  border: 1px solid lightgray;
`;

type ToiProps = {
  links: {
    link: string;
    text: string;
  }[]
};

const Toi = ({
  links
}:ToiProps) => {
  return (
    <>
      {
        links.map((item, index)=>{
          return (
            <Link key={index} href={item.link} passHref>
              <StyledLink href={item.link}>{item.text}</StyledLink>
            </Link>
          )
        })
      }
    </>
  );
};

export default Toi;