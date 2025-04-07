import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import ThemeToggler from "@/src/components/themeToggle";
import Input from "@/src/components/Input";
import Card from "@/src/components/Card";
import { maskFirstName } from "@/utils/mask";
import { useTranslation } from "@/hooks/useTranslation";
import Select from "@/src/components/Select";



export default function ConfigPresentation_01() {

    const { t } = useTranslation(['presentationConfig', 'common']);


    const [userName, setUserName] = useState('');
    const [loveName, setLoveName] = useState('');

    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    const monthKeys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    const monthOptions = monthKeys.map((key, index) => ({
      value: String(index + 1).padStart(2, '0'), // Ex: "01", "02", ..., "12"
      label: t(`months.${key}`),
    }));


    return (
        <main className="min-h-screen flex items-center justify-center ">
            <Card >
                <h1 className="text-4xl font-bold text-c-primary  mb-4">
                    {t("title2")}
                </h1>
                <form className="space-y-4 max-w-md mx-auto">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6 my-2">
                            <Input
                                label={t("name")}
                                name="name"
                                type="name"
                                placeholder={t("namePlaceholder")}
                                value={maskFirstName(userName)}
                                onChange={(e) => setUserName(e.target.value)}
                                variant="default"
                                size="md"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <Input
                                label={t("luvName")}
                                name="luvName"
                                type="luvName"
                                placeholder={t("luvNamePlaceholder")}
                                value={maskFirstName(loveName)}
                                onChange={(e) => setLoveName(e.target.value)}
                                variant="default"
                                size="md"
                            />
                        </div>
                    </div>

                    <div className="row d-flex">
                        <p>Quando vocês se conheceram?</p>
                        <div className="col-12 d-flex  my-2">
                            <div className="col-3 px-1">

                                <Select
                                    label="Dia"
                                    name="namoDay"
                                    placeholder="Dia"
                                    options={[
                                        { value: 'active', label: 'Ativo' },
                                        { value: 'inactive', label: 'Inativo' },
                                        { value: 'pending', label: 'Pendente' }
                                    ]}
                                    value={''}
                                    onChange={''}
                                />
                            </div>
                            <div className="col-6 px-1">

                                <Select
                                    label="Mês"
                                    name="namoDay"
                                    placeholder="Dia"
                                    options={monthOptions}
                                    value={''}
                                    onChange={''}
                                />
                            </div>
                            <div className="col-3 px-1">

                                <Select
                                    label="Ano"
                                    name="namoDay"
                                    placeholder="Dia"
                                    options={[
                                        { value: 'active', label: 'Ativo' },
                                        { value: 'inactive', label: 'Inativo' },
                                        { value: 'pending', label: 'Pendente' }
                                    ]}
                                    value={''}
                                    onChange={''}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">

                        <Button outline data-bs-target="#tutorialPages" data-bs-slide-to={1}>
                            Começar agora!
                        </Button>
                    </div>
                </div>
            </Card>
        </main>
    )


}