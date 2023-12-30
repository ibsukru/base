"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function Signout() {
  return (
    <a href="#" onClick={() => signOut()}>
      signout
    </a>
  );
}
