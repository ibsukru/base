import React from "react";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SigninLink from "@/components/auth/signinLink";

async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      {Object.values([{ name: "Github", id: "github" }]).map((provider) => (
        <div key={provider.name}>
          <SigninLink name={provider.name} id={provider.id} />
        </div>
      ))}
    </div>
  );
}

export default SignIn;
