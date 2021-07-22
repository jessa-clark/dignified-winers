import { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { signIn } from "../../services/users";

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
      <section>
        <h2>Welcome back, Winer!</h2>
      </section>
      <section>
        <h3>Sign Up</h3>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default SignIn;
