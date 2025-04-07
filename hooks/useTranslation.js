// hooks/useTranslation.js
import { useRouter } from 'next/router';

// Importar todos os arquivos de tradução
import ptCommon from '../locales/pt/common';
import ptPresentationConfig from '../locales/pt/presentationConfig';

import enCommon from '../locales/en/common';
import enPresentationConfig from '../locales/en/presentationConfig';

import esCommon from '../locales/es/common';
import esPresentationConfig from '../locales/es/presentationConfig';

// Organizar as traduções por locale e namespace
const translations = {
  'pt': {
    common: ptCommon,
    presentationConfig: ptPresentationConfig,
  },
  'en': {
    common: enCommon,
    presentationConfig: enPresentationConfig,
  },
  'es': {
    common: esCommon,
    presentationConfig: esPresentationConfig,
  },
};

export function useTranslation(namespace = 'common') {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  
  // Obter a tradução atual com base no locale e namespace
  const t = (key, ns = namespace) => {
    // Suporta acesso aninhado (ex: "nav.home")
    const keys = key.split('.');
    let translation = translations[locale]?.[ns];
    
    // Navegar na estrutura aninhada de traduções
    for (const k of keys) {
      translation = translation?.[k];
      if (translation === undefined) break;
    }
    
    return translation !== undefined ? translation : key;
  };

  // Alternar entre os idiomas disponíveis
  const changeLanguage = (newLocale) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return {
    t,
    locale,
    locales,
    changeLanguage,
  };
}