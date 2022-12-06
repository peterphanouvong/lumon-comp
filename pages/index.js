import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { LoggedIn } from "../components/LoggedIn";
import { LoggedOut } from "../components/LoggedOut";

export default function Home() {
  // replace with variables from useKindeAuth
  const { isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) return <>Loading....</>;

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}
