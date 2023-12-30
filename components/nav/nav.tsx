import React from "react";
import Link from "next/link";
import ThemeChanger from "../themeChanger";
import { auth } from "@/auth";
import SignoutLink from "../auth/signoutLink";

import styles from "./nav.module.css";

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
