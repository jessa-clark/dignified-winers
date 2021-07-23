import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="dev-container">
        <p className="dev-name">Rahul Joshi</p>
        <div className="dev-logo-container">
          <a href="https://www.linkedin.com/in/rahul-joshi-00/" target="_blank" rel="noreferrer" className="linkedin-logo">
            <AiOutlineLinkedin size={50}/>
          </a>
          <a href="https://github.com/rahulpjo" target="_blank" rel="noreferrer" className="github-logo">
            <VscGithub size={45}/>
          </a>
        </div>
      </div>
      <div className="dev-container">
        <p className="dev-name">Maximiliana Carlson</p>
        <div className="dev-logo-container">
          <a href="https://www.linkedin.com/in/maximiliana-c-66539149/" target="_blank" rel="noreferrer" className="linkedin-logo">
          <AiOutlineLinkedin size={50}/>
          </a>
          <a href="https://github.com/carlsonmr000" target="_blank" rel="noreferrer"className="github-logo">
          <VscGithub size={45}/>
          </a>
        </div>
      </div>
      <div className="dev-container">
        <p className="dev-name">Erick Manrique</p>
        <div className="dev-logo-container">
          <a href="https://www.linkedin.com/in/erick-manrique/" target="_blank" rel="noreferrer" className="linkedin-logo">
          <AiOutlineLinkedin size={50}/>
          </a>
          <a href="https://github.com/yeezick" target="_blank" rel="noreferrer" className="github-logo">
          <VscGithub size={45}/>
          </a>
        </div>
      </div>
      <div className="dev-container">
        <p className="dev-name">Jessa Clark</p>
        <div className="dev-logo-container">
          <a href="https://www.linkedin.com/in/jessa-clark" target="_blank" rel="noreferrer" className="linkedin-logo">
          <AiOutlineLinkedin size={50}/>
          </a>
          <a href="https://github.com/jessa-clark" target="_blank" rel="noreferrer" className="github-logo">
          <VscGithub size={45}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
