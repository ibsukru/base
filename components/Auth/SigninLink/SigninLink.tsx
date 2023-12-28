"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function SigninLink({ name, id }: { name: string; id: string }) {
  return <button onClick={() => signIn(id)}>Sign in with {name}</button>;
}
