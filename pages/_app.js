import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <KindeProvider>
      <Component {...pageProps} />
    </KindeProvider>
  );
}

export default MyApp;
