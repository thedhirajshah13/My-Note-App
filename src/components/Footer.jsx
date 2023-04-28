import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>D_APP @ {year}</p>
    </footer>
  );
}
export default Footer;
