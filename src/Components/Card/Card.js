import React from "react";
import styled from "styled-components";
import { mobile, tab } from "../../responsive";

const Card = ({
  icon,
  title,
  description,
  details,
  details2,
  BorderRadius,
  disable,
  header1,
  header2,
}) => {
  return (
    <Container BorderRadius={BorderRadius}>
      <Icon>{icon}</Icon>
      {title ? <Title>{title}</Title> : null}
      <Description>{description}</Description>
      {details ? (
        <DetailBody>
          {header1 ? <Header>{header1}</Header> : null}
          <Details disable={disable}>{details}</Details>{" "}
        </DetailBody>
      ) : null}
      {details2 ? (
        <DetailBody>
          {header2 ? <Header>{header2}</Header> : null}{" "}
          <Details>{details2}</Details>
        </DetailBody>
      ) : null}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 4px 10px 0px rgba(32, 148, 0, 0.4);
  flex-direction: column;
  width: 350px;
  text-align: left;
  padding: 10px;
  padding-left: 20px;
  height: ${(props) => (props.BorderRadius ? "280px" : "fit-content")};
  padding-right: 5px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: ${(props) => (props.BorderRadius ? "10px" : null)};
  ${mobile({
    width: "240px",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "10px 30px",
    marginTop: "0px",
  })}
  ${tab({
    width: "240px",
    padding: "10px 30px",
    marginTop: "0px",
  })}
`;
const Icon = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  ${mobile({
    transform: "scale(0.9)",
    margin: "5px 0px",
  })}
  ${tab({
    transform: "scale(0.9)",
    margin: "5px 0px",
  })}
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 29.26px;
  padding-bottom: 20px;
  ${mobile({
    fontSize: "18px",
  })}
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 95%;
  height: 80px;
  ${mobile({
    lineHeight: "19.5px",
  })}
  ${tab({
    lineHeight: "19.5px",
  })}
`;
const DetailBody = styled.div`
  display: flex;
`;
const Header = styled.h1`
  margin: 0;
  padding: 0;
  width: fit-content;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-right: 5px;
  ${mobile({
    fontSize: "16px",
  })}
`;
const Details = styled.div`
  width: fit-content;
  font-weight: 500;
  color: ${(props) =>
    props.disable ? "rgba(85, 85, 85, 0.8)" : "rgba(32, 148, 0, 1)"};
  line-height: 29.26px;
  font-size: 18px;
  padding-bottom: 5px;
  padding-top: 0px;
  ${mobile({
    fontSize: "16px",
  })}
`;

export default Card;
