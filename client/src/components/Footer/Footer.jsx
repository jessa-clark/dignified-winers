import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <h3 className="footer-title">Thanks for Wining! </h3>
      <p className="footer-title-text">The 4 talented developers who made this site possibleare credited below!  If you'd like to see the repository for this website in particular, OctoCat will show you the way.</p>
      <a href="https://github.com/jessa-clark/dignified-winers" target="_blank" rel="noreferrer" alt="dignified winers repository link"
      className="octocat"><img src="/img/octocat-kenobi.png" alt="github 404 octo-cat" /> </a>
      <div className="footer-dev-container">
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
      </div>
    </footer>
  );
};

export default Footer;
