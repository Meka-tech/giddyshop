import React from "react";
import styled from "styled-components";

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
  border-radius: ${(props) => (props.BorderRadius ? "10px" : null)};
`;
const Icon = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29.26px;
  padding-bottom: 20px;
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  width: 95%;
  height: 80px;
`;
const Details = styled.div`
  font-weight: 500;
  color: rgba(32, 148, 0, 1);
  line-height: 29.26px;
  font-size: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export default Card;
