import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import MessageUs from "../Components/MessageUs/MessageUs";
import { ReactComponent as PaySvg } from "../Images/PaySvg.svg";

import { ReactComponent as TextBubble } from "../Images/CardIcons/TextBubble.svg";
import { ReactComponent as InfoBubble } from "../Images/CardIcons/InfoBubble.svg";
import { ReactComponent as CheckmarkBubble } from "../Images/CardIcons/CheckmarkBubble.svg";

import { ReactComponent as BitcoinBubble } from "../Images/UtilityCardIcon/BitcoinBubble.svg";
import { ReactComponent as SubBubble } from "../Images/UtilityCardIcon/SubBubble.svg";
import { ReactComponent as GiftCardBubble } from "../Images/UtilityCardIcon/GiftCardBubble.svg";
import { ReactComponent as OVCBubble } from "../Images/UtilityCardIcon/OVCBubble.svg";
import { ReactComponent as TransferBubble } from "../Images/UtilityCardIcon/TransferBubble.svg";
import { ReactComponent as MoneyBubble } from "../Images/UtilityCardIcon/MoneyBubble.svg";
import { ReactComponent as PaymentBubble } from "../Images/UtilityCardIcon/PaymentBubble.svg";
import UtilityCard from "../Components/Card/UtilityCard";
import { ReactComponent as Woman } from "../Images/SmileWoman.svg";

const GiddyPay = () => {
  return (
    <Container>
      <Navbar active="GiddyPay" />
      <Body>
        <Banner>
          <TextDiv>
            <h1>
              Introducing <b>Giddy</b>Pay, your financial service platform for
              all your monetary needs
            </h1>
            <h3>
              Skip the inconvinece of having to pay bills or perform online
              transactions and let us sort out all your financial needs swiftly
              with no risks at all.
            </h3>
            <MessageUs />
          </TextDiv>
          <BannerImg>
            <PaySvg />
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
              <b>Giddy</b>Pay
            </h2>
          </span>
        </Title>
        <Utilities>
          <UtilityCard
            icon={<BitcoinBubble />}
            description="We’ll help you buy & sell crypto currencies in no time at an amazing rate."
            title="Buy & Sell Crypto"
          />
          <UtilityCard
            icon={<SubBubble />}
            description="We’ll help pay for your online subscriptions like Netflix, DSTV, Etc in no time at all."
            title="Online Subscriptions"
          />
          <UtilityCard
            icon={<GiftCardBubble />}
            description="Buy & Sell your giftcards and receive instant payment at an amazing rate."
            title="Buy & Sell Giftcards"
          />
          <UtilityCard
            icon={<OVCBubble />}
            description="Perform over the counter deals at our physical office in Nigeria or Dubai."
            title="Over-the-Counter"
          />
          <UtilityCard
            icon={<PaymentBubble />}
            description="Pay Utility bills, online payments and also withdraw or send money to anyone in the world. "
            title="Payments & POS"
          />
          <UtilityCard
            icon={<TransferBubble />}
            description="Send and receive money from anyone in the world at a good rate."
            title="International Transfer"
          />
          <UtilityCard
            icon={<MoneyBubble />}
            description="Make instant and secure payments with perfect money at an ideal level."
            title="Perfect Money"
          />
        </Utilities>
        <Aside>
          <AsideTextContent>
            <span>
              <h1>
                <b>You + </b>
              </h1>
              <h2>
                <b>Giddy</b>Up
              </h2>
              <h1>
                <b style={{ marginLeft: "10px" }}> = </b>
              </h1>
            </span>
            <span>
              <h1>
                <b> a simpler life</b>
              </h1>
            </span>

            <h3>
              We were invented to suit your busy lifestyle and make monetary
              services more attainable and secure for you.
            </h3>
            <div>
              {" "}
              <MessageUs />
            </div>
          </AsideTextContent>
          <AsideSVG>
            <Woman />
          </AsideSVG>
        </Aside>
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
      font-size: 40px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 500;
      margin-right: 10px;
    }
    h2 {
      margin-left: 20px;
      font-size: 40px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
    }
  }
  h1 {
    font-size: 40px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 500;
  }
  h2 {
    margin-left: 20px;

    font-size: 40px;
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
const Aside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  padding: 20px 50px;
`;
const AsideSVG = styled.div`
  flex: 1;
`;
const AsideTextContent = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  span {
    display: flex;
    width: 400px;
    h1 {
      font-size: 40px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: black;
      font-weight: 500;
      margin-right: 10px;
    }
    h2 {
      margin-right: 20px;
      margin-left: 20px;
      font-size: 40px;
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
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export default GiddyPay;
