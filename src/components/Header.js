import React from "react";

function Header() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="header">
      <header>
        <h1>Memory Keeper App</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="./publi/index.html">Memory App</a>
          </li>
          <li>
            <a href="https://elaynefinalproject.netlify.app/">
              Laynie's Website
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
