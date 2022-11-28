import { LoggedIn } from "../components/LoggedIn";
import { LoggedOut } from "../components/LoggedOut";

// TODO:
// Use Kinde Auth to determine if a user is authenticated and if data is loading.

export default function Home() {
  // replace with variables from useKindeAuth
  const isLoading = false;
  const isAuthenticated = false;

  if (isLoading) return <>Loading...</>;

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}
