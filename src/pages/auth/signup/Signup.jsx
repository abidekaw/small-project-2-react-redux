import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = window.localStorage.getItem("users")
      ? JSON.parse(window.localStorage.getItem("users"))
      : [];
    users.push(form);
    window.localStorage.setItem("users", JSON.stringify(users));
    setForm({
      name: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Daftar</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="">Name</label>
            <br />
            <input
              type="text"
              placeholder="name"
              name="name"
              value={form.name}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <br />
            <input
              type="text"
              placeholder="username"
              name="username"
              value={form.username}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={form.password}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
