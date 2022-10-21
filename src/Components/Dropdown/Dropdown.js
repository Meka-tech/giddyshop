import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DropdownIcon } from "../../Images/DropdownIcon.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

const Dropdown = ({ active }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const Toggle = () => {
    setDropdownActive(!dropdownActive);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownActive(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <Container ref={wrapperRef} onClick={() => Toggle()}>
      <DropdownIcon />
      <NavContainer style={{ display: dropdownActive ? "flex" : "none" }}>
        <Link to="/company/contact-us" style={{ textDecoration: "none" }}>
          <NavItem active={active} name="Contact Us">
            <h3>Contact Us</h3>
          </NavItem>
        </Link>
        <Link to="/company/about-us" style={{ textDecoration: "none" }}>
          <NavItem active={active} name="About Us">
            {" "}
            <h3>About Us</h3>
          </NavItem>
        </Link>
        <Link to="/company/FAQs" style={{ textDecoration: "none" }}>
          <NavItem active={active} name="FAQs">
            <h3>FAQs</h3>
          </NavItem>
        </Link>
      </NavContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-left: 5px;
  cursor: pointer;
  flex-direction: column;
  z-index: 1000;
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(32, 148, 0, 1);
  margin-left: -100px;
  margin-top: 5px;
  width: 150px;
  padding: 0;
  ${mobile({
    width: "130px",
    marginTop: "10px",
  })}
`;
const NavItem = styled.div`
  padding: 5px 35px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding-bottom: 0;
  ${mobile({
    height: "25px",
    padding: "2px 5px",
  })}
  &:hover {
    background-color: rgba(32, 148, 0, 0.7);
    color: white;
    margin: 0;
    padding: 5px 35px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    ${mobile({
      height: "25px",
      padding: "2px 5px",
    })}
  }
  h3 {
    font-size: 14px;
    margin: 0;
    padding: 0;
    font-weight: 500;

    &:hover {
      color: white;
      font-size: 14px;
      margin: 0;
      padding: 0;
      font-weight: 500;
    }
  }
`;

export default Dropdown;
