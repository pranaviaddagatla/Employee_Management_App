import React from "react";

function FooterComponent() {
  return (
    <footer className="footer bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <span>© {new Date().getFullYear()} Employee Management App</span>
      </div>
    </footer>
  );
}

export default FooterComponent;
