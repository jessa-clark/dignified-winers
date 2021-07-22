import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";
import "./SignIn.css";

const SignIn = (props) => {
  const history = useHistory();
  const { setUser } = props;
  const [returnUser, setReturnUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser({ ...returnUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signInUser = async () => {
      const signedInUser = await signIn(returnUser);
      setUser(signedInUser);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    signInUser();
  };

  return (
    <Layout>
      <section className="sign-in-screen-text">
        <h2>Welcome back, Winer!</h2>
      </section>
      <section className="sign-in-screen-form">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={returnUser.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={returnUser.password}
            onChange={handleChange}
          />
          <button type="submit">
            <h3>Submit</h3>
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/sign-up" className="sign-up-link">
            Sign up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default SignIn;
