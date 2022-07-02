import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";
import { mobile, tab } from "../responsive";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Navbar active="Company" />
      <Body>
        <Banner>
          <h1>Privacy Policy</h1>
        </Banner>
        <Content>
          <h1> Privacy Policy </h1>
          <p>
            Reservation of Rights <br />
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>{" "}
          <p>
            {" "}
            Removal of links from our website
            <br /> If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <h2> Disclaimer</h2>
          <p>
            {" "}
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:{" "}
          </p>
          <p>
            limit or exclude our or your liability for death or personal injury;
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation; limit any of our or your liabilities in any way
            that is not permitted under applicable law; or exclude any of our or
            your liabilities that may not be excluded under applicable law. The
            limitations and prohibitions of liability set in this Section and
            elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            {" "}
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </Content>
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
  justify-content: center;
  align-items: center;
  background-color: rgba(210, 234, 204, 1);
  height: 300px;
  ${mobile({ height: "200px" })}
  h1 {
    font-size: 40px;
    color: rgba(32, 148, 0, 1);
    ${mobile({ fontSize: "25px" })}
  }
`;
const Content = styled.div`
  padding: 20px 60px;
  font-weight: 600;
  text-align: left;
  padding-bottom: 150px;
  ${mobile({ padding: "5px 30px" })}
  h1 {
    color: rgba(32, 148, 0, 1);
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 80px;
  }
  h2 {
    color: rgba(32, 148, 0, 1);
    font-size: 20px;
    margin-top: 50px;
  }
  p {
    color: black;
    margin-top: 25px;
    margin-bottom: 25px;
    line-height: 40px;
    ${mobile({ lineHeight: "30px", fontSize: "16px" })}
  }
`;

export default PrivacyPolicy;
