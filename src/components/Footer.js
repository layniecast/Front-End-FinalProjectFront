import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyright © {currentYear} by{" "}
        <a href="https://elaynefinalproject.netlify.app">Laynie</a>{" "}
      </p>
    </div>
  );
}

export default Footer;
