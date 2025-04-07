
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

module.exports = withFlowbiteReact({
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    // Isso faz com que o Next.js detecte o idioma do usuário pelo cookie ou cabeçalho Accept-Language
    localeDetection: true,
  },
  reactStrictMode: true,
});