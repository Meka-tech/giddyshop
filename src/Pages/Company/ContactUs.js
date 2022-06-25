import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import { ReactComponent as AboutUsSvg } from "../../Images/AboutUsSvg.svg";

import { ReactComponent as WhatsappBubble } from "../../Images/CardIcons/WhatsappBubble.svg";
import { ReactComponent as Livechat } from "../../Images/CardIcons/LivechatBubble.svg";
import { ReactComponent as EmailBubble } from "../../Images/CardIcons/EmailBubble.svg";

const ContactUs = () => {
  return (
    <Container>
      <Navbar active="Company" dropdownActive="Contact Us" />
      <Body>
        <Banner>
          <TextDiv>
            <h1>Contact Us</h1>
            <h3>
              We never leave our customers hanging so if you ever need help or
              got some feedback or just want to chat, we’ve got you.
            </h3>
          </TextDiv>
          <BannerImg></BannerImg>
        </Banner>
        <Cards>
          <Card
            icon={<WhatsappBubble />}
            description="Need help right now? Contact our customer care service via WhatsApp."
            title="Whatsapp"
            details="+2348072009224"
            BorderRadius={true}
          />
          <Card
            icon={<Livechat />}
            description="Need help right now? Contact our customer care service via WhatsApp. "
            title="Livechat"
            details="GiddyShoplivechat"
            BorderRadius={true}
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
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(32, 148, 0, 0.2);
  padding: 40px;
  padding-top: 30px;
`;
const BannerImg = styled.div`
  flex: 1;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  h1 {
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-size: 40px;
    font-weight: 600;
    width: 80%;
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
    width: 80%;
    margin-bottom: 20px;
    line-height: 35px;
    letter-spacing: 4%;
    vertical-align: top;
  }
`;
const Cards = styled.div`
  height: 500px;
  padding: 10px 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ContactUs;
