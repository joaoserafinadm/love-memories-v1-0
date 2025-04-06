import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/text.scss";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Cookie from "js-cookie";
import jwt from "jsonwebtoken";

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/700.css';
import PresentationConfig from "@/src/pages/PresentationConfig";
import MainLayout from "@/src/layouts/mainLayout";

import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const cookieToken = Cookie.get("auth");
    if (cookieToken) {
      const decoded = jwt.decode(cookieToken);
      setToken(decoded);
    }
  }, []);

  return (
    <>
      {!token && (
        <ThemeProvider>
          <MainLayout>
            <PresentationConfig />
          </MainLayout>
        </ThemeProvider>
      )}
      {token && (
        <ThemeProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      )}
    </>
  );
}

export default appWithTranslation(App);
