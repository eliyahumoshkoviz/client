import React from "react";
import style from "./style.module.css";

export default function Register() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.from}>
            <h1 className={style.title}>Mailbox - communicate full-world</h1>
            <div className={style.line}></div>
          <form>
            <p className={style.text}>Enter your email address and we'll send you a link to reset your password.</p>
            <div className={style.container_input} >
              <input className={style.input} type="email" required placeholder="Email Address" />
            </div>
            <div className={style.container_input}>
              <input className={style.input} type="text" required placeholder="First Name" />
            </div>
            <div className={style.container_input}>
              <input className={style.input} type="text" required placeholder="Last Name" />
            </div>
            <div className={style.container_input}>
              <input className={style.input} type="password" required placeholder="Password" />
            </div>
            <div className={style.actions}>
              <button className={style.register} type="submit"> Register </button>
              <a className={style.a}>Forgot Password?</a>
            </div>
          </form>
        </div>
        <div >
          <img className={style.img} src="/img/send-mail.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
