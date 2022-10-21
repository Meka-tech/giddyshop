import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import ContactUsPng from "../../Images/StockImages/ContactUsPng.png";

import { ReactComponent as WhatsappBubble } from "../../Images/CardIcons/WhatsappBubble.svg";
import { ReactComponent as Livechat } from "../../Images/CardIcons/LivechatBubble.svg";
import { ReactComponent as EmailBubble } from "../../Images/CardIcons/EmailBubble.svg";
import { mobile, tab } from "../../responsive";

const ContactUs = () => {
  return (
    <Container>
      <Navbar active="Company" dropdownActive="Contact Us" />
      <Body>
        <Banner>
          <div>
            <TextDiv>
              <h1>Contact Us</h1>
              <h3>
                We never leave our customers hanging so if you ever need help or
                got some feedback or just want to chat, we’ve got you.
              </h3>
            </TextDiv>
            <BannerImg>
              <img src={ContactUsPng} alt="Contact us" />
            </BannerImg>
          </div>
        </Banner>
        <Cards>
          <Card
            icon={<WhatsappBubble />}
            description="Need help right now? Contact our customer care service via WhatsApp."
            title="Whatsapp"
            header1="Nigeria:"
            details=" +2348072009224"
            header2="UAE: "
            details2=" +971581885291"
            BorderRadius={true}
          />
          <Card
            icon={<Livechat />}
            description="Need help right now? Contact our customer care service via WhatsApp. "
            title="Livechat"
            details="Giddylivechat"
            BorderRadius={true}
            disable={true}
          />
          <Card
            icon={<EmailBubble />}
            description="Lets hear you out, We can help you through our Email channel "
            title="Email"
            details="Giddyshopafrica@gmail.com"
            BorderRadius={true}
          />
        </Cards>
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
  background-color: rgba(32, 148, 0, 0.2);
  padding: 40px;
  padding-top: 30px;
  padding-bottom: 0;
  div {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 2000px;
  }
  ${tab({
    position: "relative",
    height: "500px",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
  })}
  ${mobile({
    position: "relative",
    height: "500px",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
  })}
`;
const BannerImg = styled.div`
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
  flex: 1;
  img {
    margin-top: -40px;
    transform: scale(0.85);
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
  margin-top: 50px;
  margin-left: 40px;
  flex: 1;
  ${tab({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
  })}
  ${mobile({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
  })}
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-size: 30px;
    font-weight: 600;
    width: 80%;
    margin-bottom: 20px;
    line-height: 60px;
    vertical-align: top;
    ${tab({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "280px",
    })}
    ${mobile({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "280px",
    })}
  }
  h3 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-weight: 600;
    width: 70%;
    margin-bottom: 20px;
    line-height: 40px;
    letter-spacing: 4%;
    vertical-align: top;
    ${tab({
      lineHeight: "21.6px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
    ${mobile({
      lineHeight: "21.6px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
  }
`;
const Cards = styled.div`
  height: 500px;
  padding: 10px 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 2000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tab({
    flexDirection: "column",
    width: "100vw",
    height: "1000px",
    padding: "100px 0px",
    marginTop: "0",
  })}
  ${mobile({
    flexDirection: "column",
    width: "100vw",
    height: "1000px",
    padding: "100px 0px",
    marginTop: "0",
  })}
`;

export default ContactUs;
