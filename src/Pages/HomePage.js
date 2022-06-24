import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer/Footer";
import MessageUs from "../Components/MessageUs/MessageUs";
import Navbar from "../Components/Navbar/Navbar";
import { ReactComponent as Woman } from "../Images/Pictures/WomanThumbsUp.svg";
const HomePage = () => {
  return (
    <Container>
      <Navbar active="Home" />
      <Body>
        <Banner>
          <TextDiv>
            <h1>Your one stop service provider for all your needs</h1>
            <h3>
              Skip the hassle and let us handle your daily tasks while you sit
              back, relax and experience tranquility like never before!
            </h3>
            <MessageUs />
          </TextDiv>
          <Woman />
        </Banner>
      </Body>
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Body = styled.div`
  height: fit-content;
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: rgba(32, 148, 0, 0.2);
  padding: 40px;
  padding-top: 30px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-size: 40px;
    font-weight: 600;
    width: 60%;
    margin-bottom: 20px;
    line-height: 60px;
    vertical-align: top;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 20px;
    font-weight: 600;
    width: 60%;
    margin-bottom: 20px;
    line-height: 35px;
    letter-spacing: 4%;
    vertical-align: top;
  }
`;

export default HomePage;
