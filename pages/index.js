import { LoggedIn } from "../components/LoggedIn";
import { LoggedOut } from "../components/LoggedOut";

// TODO:
// Use Kinde Auth to determine if a user is authenticated and if data is loading.
// If is loading, then return the loading skeleton
// If authenticated, then return the LoggedIn.jsx component
// If not authenticated, then return the LoggedOut.jsx component.

export default function Home() {
  // replace with variables from useKindeAuth
  const isLoading = false;
  const isAuthenticated = false;

  if (isLoading) return <>Loading...</>;

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}
