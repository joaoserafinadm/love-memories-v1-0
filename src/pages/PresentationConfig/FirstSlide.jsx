import React from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import ThemeToggler from "@/src/components/themeToggle";
import Card from "@/src/components/Card";
import { useTranslation } from "react-i18next";



export default function FirstSlide() {

    const { t } = useTranslation('common');
    return (
        <main className="min-h-screen flex items-center justify-center ">
            <ThemeToggler />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card >

                    <h1 className="text-4xl font-bold text-c-primary  mb-4">
                        Sua história de amor, do seu jeito ❤️
                    </h1>
                    <p className=" text-lg mb-6">
                        Crie uma retrospectiva romântica e emocionante com fotos, momentos e uma carta de amor. Gere um link com QR Code e surpreenda quem você ama.
                    </p>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">

                            <Button outline data-bs-target="#tutorialPages" data-bs-slide-to={1}>
                                Começar agora!
                            </Button>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </main>
    )


}