import React from "react";
import Link from "next/link";
import ThemeChanger from "../ThemeChanger";
import { auth } from "@/auth";
import SignoutLink from "../Auth/SignoutLink";

import styles from "./Nav.module.css";

const Nav = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.home}>
        home
      </Link>
      <div className={styles.theme}>
        <ThemeChanger />
      </div>
      {session ? <SignoutLink /> : <Link href={"/signin"}>signin</Link>}
    </div>
  );
};

export default Nav;
