import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import { mobile, tab, fourK } from "../responsive";
import MessageUs from "../Components/MessageUs/MessageUs";
import { ReactComponent as PaySvg } from "../Images/PaySvg.svg";
import SmileWoman from "../Images/StockImages/SmileWoman.png";

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
import FooterPay from "../Components/Footer/FooterPay";

const GiddyPay = () => {
  return (
    <Container>
      <Navbar active="GiddyPay" />
      <Body>
        <Banner>
          <div>
            <TextDiv>
              <h1>
                Introducing <b>Giddy</b>Pay, your financial service platform for
                all your monetary needs
              </h1>
              <h3>
                Skip the inconvinece of having to pay bills or perform online
                transactions and let us sort out all your financial needs
                swiftly with no risks at all.
              </h3>
              <span>
                <MessageUs />
              </span>
            </TextDiv>
            <BannerImg>
              <PaySvg />
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
              {" "}
              <div>
                {" "}
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
              </div>
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
            <img src={SmileWoman} alt="Woman Smiling" />
          </AsideSVG>
        </Aside>
      </Body>
      <FooterPay />
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
    justify-content: left;

    ${fourK({
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
  ${tab({
    position: "relative",
    height: "500px",
    maxHeight: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "40px",
  })}
  ${mobile({
    position: "relative",
    height: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "20px",
    paddingBottom: "40px",
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
    transform: "scale(0.7)",
    marginTop: "80px",
  })}
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.7)",
    marginTop: "80px",
  })}

  flex: 1;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  margin-left: 40px;
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
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    margin-bottom: 20px;
    line-height: 35px;
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
  div {
    ${mobile({
      marginLeft: "auto",
      marginRight: "auto",
      transform: "scale(0.95)",
    })}
  }
`;
const Cards = styled.div`
  height: 260px;
  padding: 50px 40px;
  padding-top: 0px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 2000px;
  justify-content: space-between;
  align-items: center;
  max-height: 460px;
  height: fit-content;
  ${mobile({
    flexWrap: "noWrap",
    flexDirection: "column",
    width: "100vw",
    height: "700px",
    maxHeight: "fit-content",
    padding: "0",
    marginTop: "0",
    paddingBottom: "50px",
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
  margin-top: 20px;
  text-align: center;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  ${mobile({ width: "80%", marginBottom: "-20px" })}
  ${tab({ width: "80%", marginBottom: "-20px" })}
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
      ${mobile({ fontSize: "22px" })}
      ${tab({ fontSize: "22px" })}
    }
    h2 {
      margin-left: 18px;
      font-size: 40px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
      ${mobile({ fontSize: "22px" })}
      ${tab({ fontSize: "22px" })}
    }
  }
  h1 {
    font-size: 35px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: black;
    font-weight: 600;
    margin-top: 25px;
    margin-bottom: -10px;
    ${tab({
      fontSize: "23px",
      lineHeight: "30px",
      paddingBottom: "20px",
      marginBottom: "15px",
      marginTop: "10px",
    })}
    ${mobile({
      fontSize: "23px",
      lineHeight: "30px",
      paddingBottom: "20px",
      marginBottom: "15px",
      marginTop: "10px",
    })}
  }
  h2 {
    margin-left: 20px;

    font-size: 18px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-weight: 600;
    ${tab({ fontSize: "22px" })}
    ${mobile({ fontSize: "22px" })}
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
  ${tab({ gridTemplateColumns: "auto auto" })}
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const Aside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  padding: 20px 50px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  ${tab({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "50px",
    paddingBottom: "100px",
  })}
  ${mobile({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "50px",
    paddingBottom: "100px",
  })}
`;
const AsideSVG = styled.div`
  flex: 1;
  margin-top: -60px;
  ${tab({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
    marginTop: "120px",
  })}
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
    marginTop: "120px",
  })}
  img {
    transform: scale(1);
    ${tab({
      transform: "scale(0.85)",
    })}
    ${mobile({
      transform: "scale(0.85)",
    })}
  }
`;
const AsideTextContent = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
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

  span {
    display: flex;
    width: 400px;

    div {
      display: flex;
      flex-direction: column;
      ${tab({
        marginBottom: "300px",
      })}
      ${mobile({
        marginBottom: "300px",
      })}
    }
    ${tab({
      width: "100%",
      marginBottom: "0px",
      justifyContent: "center",
    })}
    ${mobile({
      width: "100%",
      marginBottom: "0px",
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
      ${tab({
        fontSize: "30px",
        marginRight: "5px",
      })}
      ${mobile({
        fontSize: "30px",
        marginRight: "5px",
      })}
    }
    h2 {
      margin-right: 18px;
      margin-left: 20px;
      font-size: 35px;
      line-height: 60px;
      margin: 0;
      padding: 0;
      color: rgba(32, 148, 0, 1);
      font-weight: 600;
      ${tab({
        fontSize: "30px",
      })}
      ${mobile({
        fontSize: "30px",
      })}
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 45px;
    font-size: 22px;
    text-align: left;
    margin-bottom: 50px;
    margin-top: 30px;
    width: 400px;
    ${tab({
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "26px",
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px",
    })}
    ${mobile({
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
    width: 100%;
    display: flex;
    justify-content: flex-start;
    ${tab({
      width: "100%",
      justifyContent: "center",
    })}
    ${mobile({
      width: "100%",
      justifyContent: "center",
    })}
  }
`;

export default GiddyPay;
