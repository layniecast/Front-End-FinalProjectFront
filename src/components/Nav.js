import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import Button from "./Button";

// const NavStyles = styled.nav`
//   --bg-color: var(--blue-dark);
//   --btn-color: #007eb6;
//   min-height: 3rem;
//   background-color: rgb(245, 238, 218);
//   margin-bottom: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: space-between;
//   ul {
//     color: rgb(37, 36, 37);
//     padding: 1rem;
//     font-size: 1.5rem;
//     text-decoration: none;
//     list-style: none;
//   }
// `;

const Nav = ({ loggedin, setLoggedin }) => {
  return (
    <div className="nav">
      {loggedin ? (
        <Button func={() => setLoggedin(false)}>Log Out</Button>
      ) : (
        <Button func={() => setLoggedin(true)}>Log In</Button>
      )}
    </div>
  );
};

export default Nav;
