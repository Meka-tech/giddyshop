import React, { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../Images/DropdownIcon.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dropdown = ({ active }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const OnClick = () => {
    setDropdownActive(!dropdownActive);
  };
  console.log();
  return (
    <Container onClick={() => OnClick()}>
      <DropdownIcon />
      <NavContainer style={{ display: dropdownActive ? "flex" : "none" }}>
        <NavItem active={active} name="Contact Us">
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            <h3>Contact Us</h3>
          </Link>
        </NavItem>
        <NavItem active={active} name="About Us">
          <h3>About Us</h3>
        </NavItem>
        <NavItem active={active} name="FAQs">
          <h3>FAQs</h3>
        </NavItem>
      </NavContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 5px;
  cursor: pointer;
  flex-direction: column;
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: white;
  border: 1px solid rgba(32, 148, 0, 1);

  margin-left: -8%;
  margin-top: 5px;
`;
const NavItem = styled.div`
  padding: 5px 35px;
  margin-bottom: ${(props) =>
    props.name !== "FAQs" || props.active !== props.name ? "10px" : null};
  margin-top: ${(props) =>
    props.name === "Contact Us" && props.active !== props.name ? "10px" : null};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active === props.name ? "white" : "black")};
  background-color: ${(props) =>
    props.active === props.name ? "rgba(32, 148, 0, 0.7)" : null};

  h3 {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${(props) => (props.active === props.name ? "white" : "black")};
  }
`;

export default Dropdown;
