import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer_bg">
      <span className="copy">&copy; </span>
      <a
        href="https://github.com/202512001"
        className="git_link"
        target="_blank"
        rel="noopener noreferrer">
        Shruti Makwana <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Footer;
