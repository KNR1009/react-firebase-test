/* Register.js */

/* 「useEffect」をimport↓ */
import React, { useState, useEffect } from "react";
/* ↓「onAuthStateChanged」をimport */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./lib/firebase";
/* ↓「Navigate」をimport */
import { Navigate } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState<any>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <>
      {/* ↓ログインしていればマイページを表示 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
