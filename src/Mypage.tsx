import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "./lib/firebase";

const MyPage = () => {
  const [user, setUser] = useState<any>("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  /* ↓「navigate」を定義 */
  const navigate = useNavigate();

  /* ↓関数「logout」を定義 */
  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};

export default MyPage;
