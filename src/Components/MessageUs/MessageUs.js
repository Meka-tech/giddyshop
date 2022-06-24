import React from "react";
import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../Images/MessageUsImage.svg";

const MessageUs = () => {
  return (
    <Container>
      <MessageIcon />
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
`;

export default MessageUs;
