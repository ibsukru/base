"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function SignoutLink() {
  return (
    <a href="#" onClick={() => signOut()}>
      signout
    </a>
  );
}
