import React from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import ThemeToggler from "@/src/components/themeToggle";
import Card from "@/src/components/Card";
import { useRouter } from "next/router";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function FirstSlide() {
  const { t } = useTranslation('presentationConfig');


  const router = useRouter();

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8">


          {/* <ThemeToggler /> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card  >
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                  <img src="/LOGO_02.png" alt="Logo" width={250} />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-c-primary mb-4">
                {t("title")}
              </h1>
              <p className=" mb-6">{t("description")}</p>
              <p className="text-c-secondary mb-6">{t("lenguageSelector")}</p>
              <div className="row mb-6">
                <div className="col-12 d-flex justify-content-center">
                  <Button pill size="xs" className="mx-1" onClick={() => changeLanguage('pt')}>Português</Button>
                  <Button pill size="xs" className="mx-1" onClick={() => changeLanguage('en')}>English</Button>
                  <Button pill size="xs" className="mx-1" onClick={() => changeLanguage('es')}>Español</Button>
                </div>
              </div>
              <p className="text-c-secondary ">{t("lenguageSelectorOk")}</p>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <Button fullWidth variant="primary" size="lg" data-bs-target="#tutorialPages" data-bs-slide-to={1}>
                    {t("startButton")}
                  </Button>
                </div>
              </div>

            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

