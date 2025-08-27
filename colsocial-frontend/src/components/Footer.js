import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#0077b6", color: "white", textAlign: "center", padding: "10px" }}>
      <p>© {new Date().getFullYear()} ColSocial - Campus Community Portal</p>
    </footer>
  );
}

export default Footer;
