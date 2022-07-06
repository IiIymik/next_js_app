import { Container } from "../Container/Container";
import { Nav } from "../Nav/Nav";
import Head from "next/head";
import React from "react";

export const DefaultPage = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Container>
        <Nav />
        {children}
      </Container>
    </div>
  );
};