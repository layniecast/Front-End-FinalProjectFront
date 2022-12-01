import React from "react";

function Header() {
  return (
    <div className="header">
      <header>
        <h1>Photo Memory App</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/../../public/index.html">Photo Memory App</a>
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
