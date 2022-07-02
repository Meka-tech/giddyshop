import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import styled from "styled-components";
import { mobile, tab } from "../responsive";

const TermsConditions = () => {
  return (
    <Container>
      <Navbar active="Company" />
      <Body>
        <Banner>
          {" "}
          <h1> Terms & Conditions</h1>
        </Banner>
        <Content>
          <h1> Terms and Conditions</h1>
          <p>Welcome to GiddyShop.info!</p>{" "}
          <p>
            {" "}
            These terms and conditions outline the rules and regulations for the
            use of GiddyPay's Website, located at www.GiddyShop.info.
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use GiddyShop.info if you do not
            agree to take all of the terms and conditions stated on this page.{" "}
          </p>
          <p>
            {" "}
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of our country. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <h2> Cookies</h2>
          <p>
            We employ the use of cookies. By accessing GiddyShop.info, you
            agreed to use cookies in agreement with the GiddyPay's Privacy
            Policy. Most interactive websites use cookies to let us retrieve the
            user’s details for each visit. Cookies are used by our website to
            enable the functionality of certain areas to make it easier for
            people visiting our website. Some of our affiliate/advertising
            partners may also use cookies.
          </p>{" "}
          <h2> License</h2>{" "}
          <p>
            Unless otherwise stated, GiddyPay and/or its licensors own the
            intellectual property rights for all material on GiddyShop.info. All
            intellectual property rights are reserved. You may access this from
            GiddyShop.info for your own personal use subjected to restrictions
            set in these terms and conditions.
          </p>
          <p>
            <br />
            GiddyPay reserves the right to monitor all Comments and to remove
            any Comments which can be considered inappropriate, offensive or
            causes breach of these Terms and Conditions.
          </p>
          <h2> Hyperlinking to our Content</h2>
          <p>
            {" "}
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <p>
            Government agencies;
            <br /> Search engines;
            <br /> News organizations;
            <br /> Online directory distributors may link to our Website in the
            same manner as they hyperlink to the Websites of other listed
            businesses; and
            <br /> System wide Accredited Businesses except soliciting
            non-profit organizations, charity shopping malls, and charity
            fundraising groups which may not hyperlink to our Web site.
            <br /> These organizations may link to our home page, to
            publications or to other Website information so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products and/or services; and (c) fits within the context of the
            linking party’s site.
          </p>
          <p>
            {" "}
            We may consider and approve other link requests from the following
            types of organizations:
          </p>
          <p>
            {" "}
            commonly-known consumer and/or business information sources;
            <br /> dot.com community sites;
            <br />
            associations or other groups representing charities;
            <br /> online directory distributors;
            <br /> internet portals;
            <br /> accounting, law and consulting firms; and <br />
            educational institutions and trade associations.
            <br /> We will approve link requests from these organizations if we
            decide that: (a) the link would not make us look unfavorably to
            ourselves or to our accredited businesses; (b) the organization does
            not have any negative records with us; (c) the benefit to us from
            the visibility of the hyperlink compensates the absence of GiddyPay;
            and (d) the link is in the context of general resource information.{" "}
          </p>
          <p>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party’s site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to GiddyPay. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </p>{" "}
          <p>
            {" "}
            Approved organizations may hyperlink to our Website as follows:
          </p>{" "}
          <p>
            {" "}
            By use of our corporate name; or
            <br /> By use of the uniform resource locator being linked to; or{" "}
            <br /> By use of any other description of our Website being linked
            to that makes sense within the context and format of content on the
            linking party’s site.
            <br /> No use of GiddyPay's logo or other artwork will be allowed
            for linking absent a trademark license agreement.
          </p>
          <h2> iFrames</h2>{" "}
          <p>
            {" "}
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>{" "}
          <h2>Content Liability</h2>{" "}
          <p>
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
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
  font-weight: 600;
  h1 {
    font-size: 40px;
    color: rgba(32, 148, 0, 1);
    ${mobile({ fontSize: "25px", width: "50%", lineHeight: "41px" })}
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
    margin-bottom: 100px;
    margin-top: 80px;
    ${mobile({ marginBottom: "70px" })}
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

export default TermsConditions;
