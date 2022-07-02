import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ReactComponent as FAQb } from "../../Images/FAQb.svg";
import MessageUs from "../../Components/MessageUs/MessageUs";
import FAQElement from "../../Components/FAQElement/FAQElement";
// import FAQb from "../../Images/FAQb.png";
import { mobile, tab } from "../../responsive";
// import { ReactComponent as FAQbanner } from "../../Images/FAQbanner.svg";
import FAQbanner from "../../Images/FAQbanner.png";
import FAQbannerMobile from "../../Images/FAQbannerMobile.png";

const FAQs = () => {
  return (
    <Container>
      <Navbar active="Company" dropdownActive="FAQs" />
      <Body>
        <Banner>
          <h1>
            Frequently Asked <br /> Questions{" "}
          </h1>
        </Banner>
        <Section>
          <Title>
            <h1>
              <b>Giddy</b>Shop
            </h1>
          </Title>
          <FAQElement
            question="What’s the fastest way to reach us?"
            answer="We give quick replies on all our socails but we are active 24/7 on our WhatsApp business account "
          />
          <FAQElement
            question="What are the service fee charges?"
            answer="Our fee depends on the service being rendered to our customers. Send us a message for a specific fee regarding a particular service."
          />
          <FAQElement
            question="What countries do we mostly operate in?"
            answer="We are based in Nigeria and also operate in Dubai. However we render worldwide services for specific needs."
          />
          <FAQElement
            question="Do you have an office?"
            answer="We have an office in Nigeria and we are currently working on setting up branches in more states. "
          />
          <FAQElement
            question="Are my orders safe with GiddyShop?"
            answer="Your orders are completely confidential and safe with us and our customer care service would also keep you updated regarding an order or service."
          />
        </Section>
        <Section>
          <Title>
            <h1>
              <b>Giddy</b>Pay
            </h1>
          </Title>
          <FAQElement
            question="Are transactions safe with GiddyPay?"
            answer="YES, your money is safe with GiddyPay and we can assure our customers that every transaction made with us is secure and successful. "
          />
          <FAQElement
            question="How long does transactions take?"
            answer="Different transactions may have different time frames but we try to make things swift with GiddyPay. "
          />
          <FAQElement
            question="Can trade all types of crypto & giftcards?"
            answer="YES, we accept and trade all type of crypto-currencies and giftcards. "
          />
          <FAQElement
            question="What are the service charges for transactions with GiddyPay?"
            answer="Like GiddyShop different transactions on GiddyPay have seperate charges attached to them. Send us a message for more information."
          />
        </Section>
        <Aside>
          <div>
            <Title>
              <h3>Still can’t see your question?</h3>
            </Title>
            <MessageUs />
          </div>
        </Aside>
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
  max-width: 100vw;
  background-color: rgba(210, 234, 204, 1);
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${FAQbanner});
  background-size: contain;

  ${tab({
    height: "250px",
    backgroundImage: `url(${FAQbannerMobile})`,
  })}
  ${mobile({
    height: "250px",
    backgroundImage: `url(${FAQbannerMobile})`,
  })}

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 65px;
    text-align: center;
    color: rgba(32, 148, 0, 1);
    width: 100%;
    ${tab({
      fontSize: "24px",
      width: "40%",
      right: "120px",
      lineHeight: "29.26px",
    })}
    ${mobile({
      fontSize: "24px",
      width: "40%",
      right: "120px",
      lineHeight: "29.26px",
    })}
  }
`;

const Title = styled.div`
  h1 {
    font-family: "Poppins", sans-serif;
    color: rgba(32, 148, 0, 1);
    margin: 0;
    padding: 0;
    font-size: 28px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 20px;
    ${tab({ fontSize: "24px", marginBottom: "50px" })}
    ${mobile({ fontSize: "24px", marginBottom: "50px" })}
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;
const Section = styled.div`
  margin-bottom: 100px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 93%;

  display: flex;
  flex-direction: column;
  ${tab({ margin: "50px 20px", width: "90%" })}
  ${mobile({ margin: "50px 20px", width: "90%" })}
  div {
    justify-content: center;
    align-items: center;
  }
`;
const Aside = styled.div`
  margin-bottom: 50px;
  margin-top: -40px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    justify-content: center;
    align-items: center;
  }
`;

export default FAQs;
