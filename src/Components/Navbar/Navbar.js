import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../Images/GiddyLogo.svg";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { mobile, tab } from "../../responsive";
import { ReactComponent as MenuIcon } from "../../Images/Menu.svg";
import { ReactComponent as EX } from "../../Images/EX.svg";

const Navbar = ({ active, dropdownActive }) => {
  const [open, setOpen] = useState(false);
  const OnClick = () => {
    setOpen(!open);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
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
    <Fragment ref={wrapperRef}>
      <Container open={open}>
        <LogoItem>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </LogoItem>
        <NavItemContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <NavItem active={active} name="Home">
              <h1>Home</h1>
            </NavItem>
          </Link>
          <Link to="/giddy-pay" style={{ textDecoration: "none" }}>
            <NavItem active={active} name="GiddyPay">
              <h1>GiddyPay</h1>
            </NavItem>
          </Link>
          <NavItem active={active} name="Company">
            <Link to="/company/about-us" style={{ textDecoration: "none" }}>
              <h1>Company</h1>
            </Link>
            <div>
              {" "}
              <Dropdown active={dropdownActive} />
            </div>
          </NavItem>
          <Button>
            <Link to="/company/contact-us" style={{ textDecoration: "none" }}>
              <h1>GiddyAsk</h1>
            </Link>
          </Button>
          <a
            href="https://forms.gle/oZTpR7winpRvW76p9"
            target="_blank"
            style={{ textDecoration: "none", color: "black", padding: "0" }}
            rel="noreferrer"
          >
            <SignUp>
              <h1>Sign up</h1>
            </SignUp>
          </a>
        </NavItemContainer>
        <HamburgerDiv open={open} onClick={() => OnClick()}>
          {open ? <EX /> : <MenuIcon />}
        </HamburgerDiv>
      </Container>
      <MobileNav open={open}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            transition: "0.1s all ease-in-out"
          }}
        >
          <MobileNavItem>Home</MobileNavItem>
        </Link>
        <Link
          to="/giddy-pay"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileNavItem>GiddyPay</MobileNavItem>
        </Link>

        <MobileNavItem>
          <Link
            to="/company/about-us"
            style={{ textDecoration: "none", color: "black" }}
          >
            Company
          </Link>
          <Dropdown />
        </MobileNavItem>

        <a
          href="https://forms.gle/oZTpR7winpRvW76p9"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
          rel="noreferrer"
        >
          <MobileNavItem>Sign Up</MobileNavItem>
        </a>

        <Link
          to="/company/about-us"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button style={{ display: open ? "flex" : "none" }}>
            <h1>GiddyAsk</h1>
          </Button>
        </Link>
      </MobileNav>
    </Fragment>
  );
};

const Fragment = styled.div`
  width: 100vw;
  top: 0;
  background-color: white;
  z-index: 100;
  position: fixed;

  ${mobile({
    position: "fixed"
  })};
`;

const Container = styled.div`
  display: flex;
  padding: 10px 0px;
  height: 35px;
  width: 100%;
  box-shadow: ${(props) =>
    props.open ? "none" : "2px 2px 2px rgba(32, 148, 0, 0.7)"};
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  border-bottom: ${(props) => (props.open ? "1px solid gray" : "none")};

  ${mobile({
    padding: "5px 0px",
    position: "relative",
    zIndex: "100"
  })}
  ${tab({
    padding: "5px 0px",
    position: "relative",
    zIndex: "100"
  })}
`;
const LogoItem = styled.div`
  margin-left: 45px;
  flex: 0.8;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  ${mobile({ marginLeft: "0px", flex: "1" })}
  ${tab({ marginLeft: "0px", flex: "1" })}

  div {
    ${mobile({ marginLeft: "-10px", transform: "scale(0.7)" })}
    ${tab({ marginLeft: "-10px", transform: "scale(0.7) ", flex: "0.2" })}
  }
`;
const NavItemContainer = styled.div`
  flex: 0.65;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
  ${mobile({ display: "none" })}
  ${tab({ marginRight: "0px", flex: "1.5" })}
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tab({ marginLeft: "15px" })}

  h1 {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) =>
      props.active === props.name ? "rgba(32, 148, 0, 1)" : "black"};
    ${tab({ fontSize: "14px" })}
  }
  div {
    margin-bottom: 2px;
  }
`;
const Button = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: rgba(32, 148, 0, 1);
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;

  h1 {
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin: 0;
    padding: 0;
  }
  ${mobile({
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    transform: "scale(0.9)"
  })}
  ${tab({
    marginLeft: "auto",
    marginRight: "auto",
    transform: "scale(0.7)"
  })}
`;
const HamburgerDiv = styled.div`
  display: none;
  ${mobile({ display: "flex" })}
  margin-right: ${(props) => (props.open ? "35px" : "15px")};
`;
const MobileNav = styled.div`
  padding-top: 30px;
  display: none;
  ${mobile({ display: "flex" })}
  height: 300px;
  max-height: fit-content;
  padding-bottom: 20px;
  width: 100vw;
  flex-direction: column;
  background-color: white;
  position: absolute;
  z-index: 20;
  /* transform: translateY(-190px); */
  transform: ${(props) =>
    props.open ? " translateY(0px)" : " translateY(-350px)"};
  transition: all 0.1s ease-in-out;
  box-shadow: ${(props) =>
    props.open ? " 0px 4px 4px 0px rgba(32, 148, 0, 0.4)" : " none"};
`;
const MobileNavItem = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: 60px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  h3 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    z-index: 20;
    color: black;
  }
`;
const SignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tab({ marginRight: "10px" })}
  border : 1px solid rgba(32, 148, 0, 1);
  border-radius: 3px;
  h1 {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    padding: 5px 10px;
    ${tab({ fontSize: "10px", padding: "5px" })}
  }
`;
export default Navbar;
