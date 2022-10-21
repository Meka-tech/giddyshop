import React from "react";
import styled from "styled-components";
import MessageUs from "../MessageUs/MessageUs";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Images/GiddyLogo.svg";
import { ReactComponent as Instagram } from "../../Images/SocialMediaLogos/InstagramIcon.svg";
import { ReactComponent as Facebook } from "../../Images/SocialMediaLogos/facebookIcon.svg";
import { ReactComponent as Twitter } from "../../Images/SocialMediaLogos/TwitterIcon.svg";
import { ReactComponent as Whatsapp } from "../../Images/SocialMediaLogos/WhatsappIcon.svg";
import { mobile, tab } from "../../responsive";

const Footer = () => {
  return (
    <Container>
      <FirstColumn>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Logo style={{ cursor: "pointer" }} />
        </Link>

        <Contacts>
          <SMIcons>
            <a
              href=" https://www.facebook.com/GiddyShopAfrica/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <Facebook style={{ cursor: "pointer" }} />
            </a>
            <a
              href="https://wa.link/rybeor"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <Whatsapp style={{ cursor: "pointer" }} />
            </a>
            <a
              href="https://instagram.com/giddyshop?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <Instagram style={{ cursor: "pointer" }} />
            </a>
            <a
              href="https://twitter.com/giddyshop?s=11"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Twitter style={{ cursor: "pointer" }} />{" "}
            </a>
          </SMIcons>
        </Contacts>
        <span>
          <MessageUs />
        </span>
      </FirstColumn>
      <Links>
        <OtherColumns>
          <h1>Company</h1>
          <Link
            to="/giddy-pay"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>GiddyPay</h3>
          </Link>
          <Link
            to="/company/about-us"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>About Us</h3>
          </Link>
          <Link
            to="/join-our-team"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>Join our team</h3>
          </Link>
        </OtherColumns>
        <OtherColumns>
          <h1>Help</h1>
          <h3>Livechat</h3>
          <Link
            to="/company/contact-us"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>Contact Us</h3>
          </Link>
          <Link
            to="/company/FAQs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>FAQs</h3>
          </Link>
        </OtherColumns>
        <OtherColumns>
          <h1>Transparency</h1>
          <Link
            to="/privacy-policy"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>Privacy Policy</h3>
          </Link>
          <Link
            to="/terms-conditions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>Terms & Conditions</h3>
          </Link>
        </OtherColumns>
      </Links>
      <CopyRight>
        {" "}
        <h1>© 2022 GiddyShop. All rights reserved</h1>
      </CopyRight>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  background-color: rgba(32, 148, 0, 0.1);
  height: 320px;
  padding: 10px;
  display: flex;
  font-family: "Montserrat", sans-serif;
  ${tab({
    paddingBottom: "60px",
  })}
  ${mobile({
    flexDirection: "column",
    padding: "0px",
    height: "fit-content",
    paddingBottom: "50px",
  })}
`;
const FirstColumn = styled.div`
  height: 58%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 35px;
  margin-top: 20px;
  ${mobile({
    height: "160px",
    marginBottom: "30px",
  })}
  span {
    ${mobile({
      transform: "scale(0.7)",
      marginLeft: "-20px",
    })}
  }
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
    color: black;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    color: rgba(32, 148, 0, 1);
    font-weight: 400;
    margin-bottom: 15px;
    color: black;
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
  flex-wrap: wrap;
  ${tab({
    marginLeft: "100px",
    display: "grid",
    gridTemplateColumns: " auto auto",
    width: "440px",
  })}
  ${mobile({
    marginLeft: "20px",
    display: "grid",
    gridTemplateColumns: " auto auto",
    width: "440px",
  })}
`;
const OtherColumns = styled.div`
  margin-top: 30px;
  flex: 0.5;
  text-align: left;

  ${mobile({
    marginRight: "auto",
    marginLeft: "auto",
    width: "180px",
    flex: "1",
  })}
  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
    color: rgba(32, 148, 0, 1);
    ${mobile({
      fontWeight: "600",
    })}
  }
  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;
const CopyRight = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 20px;
  ${tab({
    marginBottom: "10px",
  })}
  ${mobile({
    marginBottom: "10px",
  })}
  h1 {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    ${mobile({
      fontSize: "12px",
    })}
  }
`;
export default Footer;
