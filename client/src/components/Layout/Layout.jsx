import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <body>
      <Nav />
      <main className="layout-children-container">{props.children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
