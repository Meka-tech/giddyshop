import React from "react";
import styled from "styled-components";
import MessageUs from "../MessageUs/MessageUs";
import { ReactComponent as Logo } from "../../Images/GiddyLogo.svg";
import { ReactComponent as Instagram } from "../../Images/SocialMediaLogos/InstagramIcon.svg";
import { ReactComponent as Facebook } from "../../Images/SocialMediaLogos/facebookIcon.svg";
import { ReactComponent as Twitter } from "../../Images/SocialMediaLogos/TwitterIcon.svg";
import { ReactComponent as Whatsapp } from "../../Images/SocialMediaLogos/WhatsappIcon.svg";

const Footer = () => {
  return (
    <Container>
      <FirstColumn>
        <Logo style={{ cursor: "pointer" }} />
        <MessageUs />
        <Contacts>
          <h1>Contact</h1>
          <h3>GiddyShop Livechat</h3>
          <SMIcons>
            <Facebook style={{ cursor: "pointer" }} />
            <Whatsapp style={{ cursor: "pointer" }} />
            <Instagram style={{ cursor: "pointer" }} />
            <Twitter style={{ cursor: "pointer" }} />
          </SMIcons>
        </Contacts>
      </FirstColumn>
      <Links>
        <OtherColumns>
          <h1>Company</h1>
          <h3>GiddyPay</h3>
          <h3>About Us</h3>
          <h3>Join our team</h3>
        </OtherColumns>
        <OtherColumns>
          <h1>Help</h1>
          <h3>Live chat</h3>
          <h3>Contact Us</h3>
          <h3>FAQs</h3>
        </OtherColumns>
        <OtherColumns>
          <h1>Transparency</h1>
          <h3>Privacy Policy</h3>
          <h3>Terms & Conditions</h3>
          <h3>Security</h3>
        </OtherColumns>
      </Links>
    </Container>
  );
};
const Container = styled.div`
  background-color: rgba(32, 148, 0, 0.1);
  height: 520px;
  padding: 10px;
  display: flex;
  font-family: "Montserrat", sans-serif;
`;
const FirstColumn = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 35px;
  margin-top: 20px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    color: rgba(32, 148, 0, 1);
    font-weight: 400;
    margin-bottom: 15px;
  }
`;
const SMIcons = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;
const Links = styled.div`
  display: flex;
  width: 50%;
  margin-left: 200px;
`;
const OtherColumns = styled.div`
  margin-top: 30px;
  flex: 0.5;
  text-align: left;
  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
    color: rgba(32, 148, 0, 1);
  }
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;
export default Footer;
