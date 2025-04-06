import "bootstrap/dist/css/bootstrap.min.css"; // Primeiro
import "@/styles/globals.css"; // Depois (Tailwind e seus temas) // Depois seu CSS que deve sobrescrever o Bootstrap
import "@/styles/text.scss";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/700.css';
import PresentationConfig from "@/src/pages/PresentationConfig";

export default function App({ Component, pageProps }) {
  
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const cookieToken = Cookie.get("auth");
    if (cookieToken) {
      const decoded = jwt.decode(cookieToken);
      setToken(decoded);
    }
  }, []);

  // if (token === null) return null;
  return (
    <>
      {!token && (
        <ThemeProvider>

            <PresentationConfig />
        </ThemeProvider>

      )}
      {token && (
        <ThemeProvider>

            <Component {...pageProps} />
        </ThemeProvider>

      )}
    </>
  );
}