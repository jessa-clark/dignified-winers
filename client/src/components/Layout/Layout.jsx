import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main className="layout-children-container">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
