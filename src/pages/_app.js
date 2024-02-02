import { AuthenticationProvider } from "@/Components/AuthenticationProvider";
import { useContext } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>
  );
}
