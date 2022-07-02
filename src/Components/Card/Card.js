import React from "react";
import styled from "styled-components";
import { mobile, tab } from "../../responsive";

const Card = ({ icon, title, description, details, BorderRadius }) => {
  return (
    <Container BorderRadius={BorderRadius}>
      <Icon>{icon}</Icon>
      {title ? <Title>{title}</Title> : null}
      <Description>{description}</Description>
      {details ? <Details>{details}</Details> : null}
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
  height: fit-content;
  padding-right: 5px;
  padding-bottom: 20px;
  margin-top: 40px;
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
const Details = styled.div`
  font-weight: 500;
  color: rgba(32, 148, 0, 1);
  line-height: 29.26px;
  font-size: 18px;
  padding-bottom: 20px;
  padding-top: 0px;
  ${mobile({
    fontSize: "16px",
  })}
`;

export default Card;
