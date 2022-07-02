import React from "react";
import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../Images/MessageUsImage.svg";

const MessageUs = () => {
  return (
    <Container>
      <a
        href="https://wa.me/message/QHH7NMUFHUV2L1"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <MessageIcon />
      </a>
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
`;

export default MessageUs;
