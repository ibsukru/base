import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import ThemeChanger from "../ThemeChanger";
import { auth } from "@/auth";
import SignoutLink from "../Auth/SignoutLink";

const Nav = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href={"/"}>home</Link>
      {session ? <SignoutLink /> : <Link href={"/signin"}>signin</Link>}

      <ThemeChanger />
    </div>
  );
};

export default Nav;
