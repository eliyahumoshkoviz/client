import React from "react";
import style from "./style.module.css";

export default function Login() {
  return (
    <div className={style.container}>
      <form>
        <h1 className={style.title}>Welcome To MailBox</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={style.actions}>
          <button className={style.login} type="submit">
            Login
          </button>
          <a className={style.a}>Forgot Password?</a>
        </div>
        <div className={style.register}>
          <p>
            Don't have an account? <a className={style.a}>Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
}
