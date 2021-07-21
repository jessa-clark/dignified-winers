import { useState } from "react";
import { signUp } from "../../services/users";

const SignUp = () => {
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
    signUp(newUser);
  };

  return (
    <article>
      <section>
        <h2>There’s nothing wrong with wining every now &#38; then..</h2>
        <p>
          Sign up today for exclusive access to our wine database and to submit
          your own wine recommendations for rating.
        </p>
      </section>
      <section>
        <h3>Sign Up</h3>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={newUser.username}
          />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={newUser.email} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={newUser.password}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </article>
  );
};

export default SignUp;
