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
          <BannerImg>
            <img src={HomeBanner} alt="Home Banner" />
          </BannerImg>
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
            title="Custom Services"
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
  img {
    transform: scale(0.9);
  }
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
    font-size: 35px;
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
    font-size: 18px;
    font-weight: 600;
    width: 80%;
    margin-bottom: 20px;
    line-height: 35px;
    letter-spacing: 4%;
    vertical-align: top;
  }
`;
const Cards = styled.div`
  height: 300px;
  padding: 10px 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  span {
    display: flex;

    h1 {
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 500;
      margin-right: 10px;
    }
    h2 {
      margin-left: 20px;
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
    }
  }
  h1 {
    font-size: 35px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 500;
  }
  h2 {
    margin-left: 20px;
    font-size: 35px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-weight: 600;
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
`;
const GiddyUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  padding: 20px 50px;
`;
const GiddyUpSVG = styled.div`
  flex: 1;
`;
const GiddyUpTextContent = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  span {
    display: flex;
    width: 35%;
    h1 {
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 500;
      margin-right: 10px;
    }
    h2 {
      margin-left: 20px;
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 45px;
    font-size: 24px;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 50px;
  }
  div {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
`;

export default HomePage;
