import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";
import JoinOurteam from "../Images/JoinOurTeam.png";
import { mobile, tab } from "../responsive";

const JoinOurTeam = () => {
  return (
    <Container>
      <Navbar active="Company" />
      <Body>
        <Banner>
          <TextDiv>
            <h1>Join our team</h1>
            <h3>
              Our team is rapidly growing and we are currently seeking staff /
              Investors to help contribute to our success. If you’re interested
              in more information, please reach out by sending us a mail.
            </h3>
            <h4>Giddyshopafrica@gmail.com</h4>
          </TextDiv>
          <BannerImg>
            <img src={JoinOurteam} alt="Join our Team" />
          </BannerImg>
        </Banner>
      </Body>
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Body = styled.div`
  height: fit-content;
  margin-top: 55px;
  ${tab({ marginTop: "48px" })}
  ${mobile({ marginTop: "48px" })}
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  padding-top: 15px;
  padding-bottom: 80px;
  margin-left: 20px;
  div {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 2000px;
  }
  ${tab({
    position: "relative",
    height: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "100px",
    marginLeft: "0",
  })}
  ${mobile({
    position: "relative",
    height: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "100px",
    marginLeft: "0",
  })}
`;
const BannerImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${tab({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
  })}
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
  })}

  img {
    transform: scale(0.7);
    ${tab({
      transform: "scale(0.45)",
    })}
    ${mobile({
      transform: "scale(0.45)",
    })}
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 2;
  margin-left: 40px;
  color: rgba(32, 148, 0, 1);
  ${tab({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
  })}
  ${mobile({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
  })}
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-size: 30px;
    font-weight: 600;
    width: 70%;
    margin-bottom: 20px;
    line-height: 60px;
    vertical-align: top;
    ${tab({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "300px",
    })}
    ${mobile({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "300px",
    })}
  }
  h3 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    font-weight: 600;
    width: 70%;
    margin-bottom: 20px;
    line-height: 40.8px;
    letter-spacing: 4%;
    vertical-align: top;
    ${tab({
      lineHeight: "28px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
    ${mobile({
      lineHeight: "28px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
  }
  h4 {
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-size: 18px;
    font-weight: 500;
    margin-top: 40px;
    ${tab({
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
    ${mobile({
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
  }
`;

export default JoinOurTeam;
