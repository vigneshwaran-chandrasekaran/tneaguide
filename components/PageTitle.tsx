import React from "react";
import styled from "styled-components";

const H1 = styled.footer`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
`;

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title = "" }: PageTitleProps) {
  return <H1>{title}</H1>;
}
