import React from "react";
import styled from "styled-components";
import { mobile, tab } from "../../responsive";
const UtilityCard = ({ icon, title, description }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const Icon = styled.div``;
const Title = styled.div`
  color: rgba(32, 148, 0, 1);
  font-size: 20px;
  line-height: 29.26px;
  font-weight: 500;
  margin: 10px 0px;
  ${tab({ fontSize: "19px" })}
  ${mobile({ fontSize: "19px" })}
`;
const Description = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: black;
  ${tab({ fontSize: "14px" })}
  ${mobile({ fontSize: "14px" })}
`;

export default UtilityCard;
