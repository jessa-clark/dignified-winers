import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();
  const { setUser } = props;
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addUser = async () => {
      const addedUser = await signUp(newUser);
      setUser(addedUser);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    addUser();
  };

  return (
    <Layout>
      <section className="sign-up-screen-text">
        <h2>There’s nothing wrong with wining every now &#38; then...</h2>
        <p>
          Sign up today for exclusive access to our wine database and to submit
          your own wine recommendations for rating.
        </p>
      </section>
      <section className="sign-up-screen-form">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={newUser.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <button type="submit">
            <h3>Submit</h3>
          </button>
        </form>
        <p>
          Already have an account?&nbsp;
          <Link to="/sign-in" className="sign-in-link">
            Sign in
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default SignUp;
