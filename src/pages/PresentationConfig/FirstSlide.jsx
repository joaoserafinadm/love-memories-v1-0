import React from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";



export default function FirstSlide() {


    return (
        <main className="min-h-screen flex items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-xl bg-slate-800 rounded-2xl shadow-xl p-8"
            >
                <h1 className="text-4xl font-bold text-c-primary  mb-4">
                    Sua história de amor, do seu jeito ❤️
                </h1>
                <p className=" text-lg mb-6">
                    Crie uma retrospectiva romântica e emocionante com fotos, momentos e uma carta de amor. Gere um link com QR Code e surpreenda quem você ama.
                </p>
                <Button outline data-bs-target="#tutorialPages" data-bs-slide-to={1}>
                    Começar agora!
                </Button>
            </motion.div>
        </main>
    )


}