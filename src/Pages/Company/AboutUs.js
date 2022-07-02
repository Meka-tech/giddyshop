import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";
import AboutGiddy from "../../Images/StockImages/AboutGiddy.png";
import SingleMan from "../../Images/StockImages/SingleMan.png";
import TwoWomen from "../../Images/StockImages/TwoWomen.png";
import { mobile, tab } from "../../responsive";
const AboutUs = () => {
  return (
    <Container>
      <Navbar active="Company" dropdownActive="About Us" />
      <Body>
        <Banner>
          <div>
            {" "}
            <TextDiv>
              <h1>About GiddyShop</h1>
              <h3>
                We arrised from the inconvience of dealing with unrelaible
                service providers coupled with essesive costs. GiddyShop is here
                to change all of that, allowing you live life without stress.
              </h3>
            </TextDiv>
            <BannerImg>
              <img src={AboutGiddy} alt="Home Banner" />
            </BannerImg>
          </div>
        </Banner>
        <Aside>
          <AsideSVG align="start">
            <img src={SingleMan} alt="single Man" />
          </AsideSVG>
          <AsideTextContent>
            {" "}
            <h1>More Than a Company</h1>
            <h3>
              We believe everyone should be able to go about their daily lives
              without having to worry about outstanding or incoming bills/tasks.
            </h3>
            <h3>
              GiddyShop is a one-stop service rendering platform cathering for
              all your needs, be it monetary, personal or other important needs
              in your everyday life.
            </h3>
          </AsideTextContent>
        </Aside>
        <Aside>
          <AsideTextContent>
            {" "}
            <h1>Our Objective</h1>
            <h3>
              Our aim is simply reducing customer labour. We’ll handle the extra
              and boring part just to make sure our customers are satisfied.
            </h3>
            <h3>
              Consiting of a revolutionary team fully commited to giving timely
              assistance, GiddyShop offers almost any kind of service available
              to a fast growing community of customers.
            </h3>
          </AsideTextContent>
          <AsideSVG align="end">
            <img src={TwoWomen} alt="Two Women" />
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
  margin-top: 55px;
  ${mobile({ marginTop: "48px" })}
  ${tab({ marginTop: "48px" })}
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(32, 148, 0, 0.2);
  padding: 40px;
  padding-top: 50px;
  padding-bottom: 100px;
  div {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    max-width: 2000px;
  }
  ${tab({
    position: "relative",
    height: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "40px",
    paddingBottom: "40px",
  })}
  ${mobile({
    position: "relative",
    height: "fit-content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "40px",
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
    transform: scale(0.8);
    ${tab({
      transform: "scale(0.45)",
      marginTop: "20px",
    })}
    ${mobile({
      transform: "scale(0.45)",
      marginTop: "20px",
    })}
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  margin-left: 40px;
  color: rgba(32, 148, 0, 1);
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
      marginBottom: "220px",
    })}
    ${mobile({
      fontSize: "24px",
      lineHeight: "26px",
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "220px",
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
`;
const Title = styled.div`
  margin-top: 20px;
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
      color: rgba(32, 148, 0, 1);
      font-weight: 500;
      margin-right: 10px;
    }
    h2 {
      margin-left: 18px;
      font-size: 40px;
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

    font-size: 18px;
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
const Aside = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  padding: 20px 50px;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
  ${tab({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "40px",
    paddingBottom: "30px",
  })}
  ${mobile({
    position: "relative",
    height: "fit-Content",
    justifyContent: "center",
    width: "100vw",
    display: "block",
    padding: "0",
    paddingTop: "40px",
    paddingBottom: "30px",
  })}
  h1 {
    color: rgba(32, 148, 0, 1);
  }
  h3 {
    color: black;
  }
`;
const AsideSVG = styled.div`
  flex: 1;
  margin-top: -60px;
  display: flex;
  justify-content: ${(props) =>
    props.align === "start" ? "flex-start" : "flex-end"};
  align-items: center;
  ${tab({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
  })}
  ${mobile({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    transform: "scale(0.6)",
  })}

  img {
    transform: scale(0.8);
    ${tab({
      marginTop: "80px",
    })}
    ${mobile({
      marginTop: "80px",
    })}
  }
`;
const AsideTextContent = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 50px;
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
    ${tab({
      width: "100%",
      marginBottom: "220px",
      justifyContent: "center",
    })}
    ${mobile({
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
  h1 {
    font-size: 25px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    color: rgba(32, 148, 0, 1);
    font-weight: 600;
    margin-right: 10px;
    width: 90%;
    margin-bottom: -20px;
    ${tab({
      marginBottom: "300px",
      width: "100%",
    })}
    ${mobile({
      marginBottom: "300px",
      width: "100%",
    })}
  }

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 45px;
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 30px;
    width: 90%;
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

export default AboutUs;
