import React from "react";
import styled from "styled-components";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import MessageUs from "../Components/MessageUs/MessageUs";
import Navbar from "../Components/Navbar/Navbar";
import HomeBanner from "../Images/StockImages/HomeBanner.png";
import { ReactComponent as TextBubble } from "../Images/CardIcons/TextBubble.svg";
import { ReactComponent as InfoBubble } from "../Images/CardIcons/InfoBubble.svg";
import { ReactComponent as CheckmarkBubble } from "../Images/CardIcons/CheckmarkBubble.svg";

import { ReactComponent as ShoppingBag } from "../Images/UtilityCardIcon/ShoppingBag.svg";
import { ReactComponent as CarBubble } from "../Images/UtilityCardIcon/CarBubble.svg";
import { ReactComponent as ErrandsBubble } from "../Images/UtilityCardIcon/ErrandsBubble.svg";
import { ReactComponent as HandyManBubble } from "../Images/UtilityCardIcon/HandyManBubble.svg";
import { ReactComponent as PaymentBubble } from "../Images/UtilityCardIcon/PaymentBubble.svg";
import { ReactComponent as ServicesBubble } from "../Images/UtilityCardIcon/ServicesBubble.svg";
import { ReactComponent as HouseBubble } from "../Images/UtilityCardIcon/HouseBubble.svg";
import UtilityCard from "../Components/Card/UtilityCard";

import { ReactComponent as VirtualAssistant } from "../Images/VirtualAssistant.svg";
import { mobile, tab, fourK } from "../responsive";
const HomePage = () => {
  return (
    <Container>
      <Navbar active="Home" />
      <Body>
        <Banner>
          <div>
            <TextDiv>
              <h1>Your one stop service provider for all your needs</h1>
              <h3>
                Skip the hassle and let us handle your daily tasks while you sit
                back, relax and experience tranquility like never before!
              </h3>
              <span>
                <MessageUs />
              </span>
            </TextDiv>
            <BannerImg>
              <img src={HomeBanner} alt="Home Banner" />
            </BannerImg>
          </div>
        </Banner>
        <Title>
          <h1>How it works</h1>
        </Title>
        <Cards>
          <Card
            icon={<TextBubble />}
            description="Send us a text on whatsapp, stating your needed service and let us help. "
          />
          <Card
            icon={<InfoBubble />}
            description="Provide us with the necessary information regarding your required service or delivery address. "
          />
          <Card
            icon={<CheckmarkBubble />}
            description="Get the required help you need without stressing. "
          />
        </Cards>
        <Title>
          <span>
            <h1>Do more with </h1>
            <h2>
              <b>Giddy</b>Shop
            </h2>
          </span>
        </Title>
        <Utilities>
          <UtilityCard
            icon={<ShoppingBag />}
            description="We’ll help you shop from Nigeria or Dubai and have it delivered to you anywhere in the world."
            title="Personal Shopping"
          />
          <UtilityCard
            icon={<CarBubble />}
            description="Book a cab or rent a car anywhere in Nigeria or Dubai in next to no time."
            title="Cab & Car Rentals"
          />
          <UtilityCard
            icon={<HouseBubble />}
            description="Make hotel and Airbnb reseravations anywhere in Nigeria or Dubai."
            title="Booking & Reservations"
          />
          <UtilityCard
            icon={<HandyManBubble />}
            description="Hire a handyman (Plumbers, Electrians, Carpenters, etc) anywhere in Nigeria or Dubai."
            title="Handyman Hiring"
          />
          <UtilityCard
            icon={<PaymentBubble />}
            description="Pay Utility bills, online payments and also withdraw or send money to anyone in the world. "
            title="Payments & POS"
          />
          <UtilityCard
            icon={<ErrandsBubble />}
            description="We’ll help with personal errands or pickups anywhere within Nigeria or Dubai."
            title="Errands & Delivery"
          />
          <UtilityCard
            icon={<ServicesBubble />}
            description="Make custom requests and we’ll deliver as long as it’s anywhere within Nigeria or Dubai."
            title="Custom & Concierge Services"
          />
        </Utilities>
        <GiddyUp>
          <GiddyUpSVG>
            {" "}
            <VirtualAssistant />
          </GiddyUpSVG>

          <GiddyUpTextContent>
            <span>
              <h1>
                <b>#</b>
              </h1>
              <h2>
                <b>Giddy</b>Up
              </h2>
            </span>
            <h3>
              Aren’t you tired of the unnecessary delay caused when trying to
              get a particular service or help? It’s time to #GiddyUp! Let us
              handle your boring tasks because with GiddyShop good things come
              to everyone and not just those who wait.{" "}
            </h3>
            <div>
              {" "}
              <MessageUs />
            </div>
          </GiddyUpTextContent>
        </GiddyUp>
      </Body>
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Body = styled.div`
  height: fit-content;
  margin-top: 55px;
  ${mobile({ marginTop: "48px" })}
  ${tab({ marginTop: "48px" })}
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(32, 148, 0, 0.2);
  padding: 40px;
  padding-top: 30px;

  div {
    display: flex;

    ${fourK({
      display: "flex",
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "2000px",
    })}
    ${mobile({
      justifyContent: "center",
      alignItems: "center",
    })}
        ${tab({
      justifyContent: "center",
      alignItems: "center",
    })}
  }

  ${mobile({
    position: "relative",
    height: "500px",
    maxHeight: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "100px",
  })}
  ${tab({
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
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
  })}
  ${tab({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
  })}
  flex: 1;

  img {
    transform: scale(0.9);

    ${mobile({
      transform: "scale(0.45)",
    })}

    ${tab({
      transform: "scale(0.45)",
    })}
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  flex: 1.5;
  margin-left: 40px;
  margin-bottom: 40px;
  align-items: flex-start;
  ${fourK({
    justifyContent: "center",
  })}

  ${tab({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  })}
  ${mobile({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
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
    ${mobile({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "220px",
    })}
    ${tab({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "250px",
    })}
  }
  h3 {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    margin-bottom: 20px;
    line-height: 35px;
    letter-spacing: 4%;
    vertical-align: top;
    ${mobile({
      lineHeight: "21.6px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
    ${tab({
      lineHeight: "21.6px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    })}
  }
`;
const Cards = styled.div`
  height: 260px;
  padding: 50px 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 0px;
  margin-top: -15px;
  max-width: 2000px;
  max-height: 460px;
  height: fit-content;
  ${mobile({
    flexWrap: "noWrap",
    flexDirection: "column",
    width: "100vw",
    height: "700px",
    padding: "0",
    marginTop: "0",
  })}
  ${tab({
    flexWrap: "noWrap",
    flexDirection: "column",
    width: "100vw",
    height: "700px",
    padding: "0",
    marginTop: "0",
    paddingBottom: "50px",
    maxHeight: "fit-content",
  })}
`;
const Title = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  ${tab({ width: "80%", marginBottom: "-20px" })}
  ${mobile({ width: "90%", marginBottom: "-20px" })}
  span {
    display: flex;

    h1 {
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 600;
      margin-right: 10px;
      ${tab({ fontSize: "22px" })}
      ${mobile({ fontSize: "22px" })}
    }
    h2 {
      margin-left: 20px;
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
      ${tab({ fontSize: "22px" })}
      ${mobile({ fontSize: "22px" })}
    }
  }
  h1 {
    font-size: 35px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 600;
    ${mobile({ fontSize: "23px", lineHeight: "30px", paddingBottom: "35px" })}
    ${tab({ fontSize: "23px", lineHeight: "30px", paddingBottom: "35px" })}
  }
  h2 {
    margin-left: 20px;
    font-size: 35px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-weight: 600;
    ${mobile({ fontSize: "22px" })}
    ${tab({ fontSize: "22px" })}
  }
  h3 {
    font-size: 40px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-weight: 500;
  }
`;

const Utilities = styled.div`
  min-height: 500px;
  max-height: fit-content;
  padding: 15px 40px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: auto auto auto;

  background-color: rgba(32, 148, 0, 0.05);
  box-shadow: 0px 4px 4px 0px rgba(32, 148, 0, 0.2);
  ${mobile({ display: "flex", flexDirection: "column" })}
  ${tab({ gridTemplateColumns: "auto auto" })}
`;
const GiddyUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  padding: 20px 50px;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  ${mobile({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "30px",
  })}
  ${tab({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "30px",
  })}
`;
const GiddyUpSVG = styled.div`
  flex: 1;
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
  })}
  ${tab({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
  })}
`;
const GiddyUpTextContent = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  ${mobile({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  })}
  ${tab({
    textAlign: "center",
    margin: "0",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
  })}

  span {
    display: flex;
    width: 35%;
    ${mobile({
      width: "100%",
      marginBottom: "220px",
      justifyContent: "center",
    })}
    ${tab({
      width: "100%",
      marginBottom: "220px",
      justifyContent: "center",
    })}
    h1 {
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 500;
      margin-right: 10px;
      ${mobile({
        fontSize: "30px",
        marginRight: "5px",
      })}
      ${tab({
        fontSize: "30px",
        marginRight: "5px",
      })}
    }
    h2 {
      margin-left: 20px;
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
      ${mobile({
        fontSize: "30px",
      })}
      ${tab({
        fontSize: "30px",
      })}
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 45px;
    font-size: 20px;
    text-align: left;
    margin-bottom: 40px;
    margin-top: 20px;
    ${mobile({
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "26px",
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px",
    })}
    ${tab({
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "26px",
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px",
    })}
  }
  div {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    ${mobile({
      width: "100%",
      justifyContent: "center",
      transform: "scale(0.9)",
    })}
    ${tab({
      width: "100%",
      justifyContent: "center",
    })}
  }
`;

export default HomePage;
