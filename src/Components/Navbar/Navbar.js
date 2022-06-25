import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/GiddyLogo.svg";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ active, dropdownActive }) => {
  return (
    <Container>
      <LogoItem>
        <Link to="/">
          <Logo />
        </Link>
      </LogoItem>
      <NavItemContainer>
        <NavItem active={active} name="Home">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </Link>
        </NavItem>
        <Link to="/giddy-pay" style={{ textDecoration: "none" }}>
          <NavItem active={active} name="GiddyPay">
            <h1>GiddyPay</h1>
          </NavItem>
        </Link>
        <NavItem active={active} name="Company">
          <h1>Company</h1>
          <Dropdown active={dropdownActive} />
        </NavItem>
        <Button>
          <h1>GiddyAsk</h1>
        </Button>
      </NavItemContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  padding: 10px 0px;
  height: 50px;
  width: 100%;
  box-shadow: 2px 2px 2px rgba(32, 148, 0, 0.7);
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
`;
const LogoItem = styled.div`
  margin-left: 45px;
  flex: 0.8;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
`;
const NavItemContainer = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) =>
      props.active === props.name ? "rgba(32, 148, 0, 1)" : "black"};
  }
`;
const Button = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: rgba(32, 148, 0, 1);
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 100px;
  cursor: pointer;
  h1 {
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin: 0;
    padding: 0;
  }
`;

export default Navbar;
