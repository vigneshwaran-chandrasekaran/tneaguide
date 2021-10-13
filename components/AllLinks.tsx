import React from "react";
import styled from "styled-components";
import Toi from "./TOI/Toi";

const ToiContainer = styled.div`
  display: "flex";
  flex-wrap: "wrap";
  justify-content: "center";
  align-items: "center";
  font-size: 1.3em;
  text-align: center;
  font-weight: bold;
  background-color: #fafafa;
  max-width: 780px;
  margin: 0 auto;
  margin-top: 5px;
  padding: 1rem 2rem 0.5rem 2rem;
  border-radius: 5px;
`;

const links = [
  {
    text: "பகுதி - 1",
    link: "/",
  },
  {
    text: "பகுதி - 2",
    link: "/page-2",
  },
  {
    text: "பகுதி - 3",
    link: "/page-3",
  },
  {
    text: "பகுதி - 4",
    link: "/page-4",
  },
  {
    text: "பகுதி - 5",
    link: "/page-5",
  },
  {
    text: "பகுதி - 6",
    link: "/page-6",
  },
  {
    text: "பகுதி - 7",
    link: "/page-7",
  },
  {
    text: "பகுதி - 8",
    link: "/page-8",
  },
  {
    text: "பகுதி - 9",
    link: "/page-9",
  },
  {
    text: "பகுதி - 10",
    link: "/page-10",
  },
  {
    text: "பகுதி - 11",
    link: "/page-11",
  },
  {
    text: "பகுதி - 12",
    link: "/page-12",
  },
  {
    text: "பகுதி - 13",
    link: "/page-13",
  },
  {
    text: "பகுதி - 14",
    link: "/page-14",
  },
  {
    text: "பகுதி - 15",
    link: "/page-15",
  },
  {
    text: "பகுதி - 16",
    link: "/page-16",
  },
  {
    text: "பகுதி - 17",
    link: "/page-17",
  },
  {
    text: "பகுதி - 18",
    link: "/page-18",
  },
  {
    text: "பகுதி - 19",
    link: "/page-19",
  },
  {
    text: "பகுதி - 20",
    link: "/page-20",
  },
  {
    text: "பகுதி - 21",
    link: "/page-21",
  },
  {
    text: "பகுதி - 22",
    link: "/page-22",
  },
  {
    text: "பகுதி - 23",
    link: "/page-23",
  },
  {
    text: "பகுதி - 24",
    link: "/page-24",
  },
  {
    text: "பகுதி - 25",
    link: "/page-25",
  },
];

export default function AllLinks() {
  return (
    <ToiContainer>
      <Toi links={links} />
    </ToiContainer>
  );
}
