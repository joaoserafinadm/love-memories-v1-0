import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import ThemeToggler from "@/src/components/themeToggle";
import Input from "@/src/components/Input";
import Card from "@/src/components/Card";
import { maskFirstName } from "@/utils/mask";



export default function ConfigPresentation_01() {

    const [userName, setUserName] = useState('');
    const [loveName, setLoveName] = useState('');


    return (
        <main className="min-h-screen flex items-center justify-center ">
            <Card >

                <h1 className="text-4xl font-bold text-c-primary  mb-4">
                    Sua história de amor, do seu jeito ❤️
                </h1>
                <form className="space-y-4 max-w-md mx-auto">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6 my-2">
                            <Input
                                label="Seu nome"
                                name="email"
                                type="email"
                                placeholder="Digite seu primeiro nome"
                                value={maskFirstName(userName)}
                                onChange={(e) => setUserName(e.target.value)}
                                variant="default"
                                size="md"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <Input
                                label="Nome do seu amor"
                                name="email"
                                type="email"
                                placeholder="Digite o primeiro nome"
                                value={maskFirstName(loveName)}
                                onChange={(e) => setLoveName(e.target.value)}
                                variant="default"
                                size="md"
                            />
                        </div>
                    </div>
                </form>

                <Button outline data-bs-target="#tutorialPages" data-bs-slide-to={1}>
                    Começar agora!
                </Button>
            </Card>
        </main>
    )


}