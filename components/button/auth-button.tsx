import { useSession, signIn, signOut } from "next-auth/react";
import { NavbarComponent } from "../blocks/nav-bar";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <NavbarComponent />
        Signed in as Client Side : {session.user?.email} <br />
        Signed in as Server Side :
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
