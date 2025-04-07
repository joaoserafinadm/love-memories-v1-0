// middleware.js (na raiz do projeto)
import { NextResponse } from 'next/server';

const supportedLocales = ['pt', 'en', 'es'];
const defaultLocale = 'pt';

function getLocaleFromHeaders(request) {
  // Obter o cabeçalho Accept-Language
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  if (!acceptLanguage) return defaultLocale;
  
  // Exemplo de valor do Accept-Language: "en-US,en;q=0.9,pt;q=0.8,es;q=0.7"
  // Precisamos extrair os códigos de idioma e suas prioridades
  const requestedLocales = acceptLanguage
    .split(',')
    .map(item => {
      const [locale, priority = 'q=1.0'] = item.trim().split(';');
      const priorityValue = parseFloat(priority.split('=')[1]) || 0;
      return { locale: locale.split('-')[0], priorityValue };
    })
    .sort((a, b) => b.priorityValue - a.priorityValue);
  
  // Mapear os códigos de idioma abreviados para os nossos locales suportados
  const localeMap = {
    'pt': 'pt',
    'en': 'en',
    'es': 'es'
  };
  
  // Procurar pelo primeiro locale compatível com nossa lista de suportados
  for (const { locale } of requestedLocales) {
    const mappedLocale = localeMap[locale];
    if (mappedLocale && supportedLocales.includes(mappedLocale)) {
      return mappedLocale;
    }
  }
  
  return defaultLocale;
}

export function middleware(request) {
  // Pular se já for uma requisição para um locale específico
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = supportedLocales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // Se já estiver em um locale, não fazer nada
  if (!pathnameIsMissingLocale) return NextResponse.next();
  
  // Detectar locale baseado no cabeçalho Accept-Language
  const locale = getLocaleFromHeaders(request);
  
  // Criar uma nova URL com o locale detectado
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Preservar query parameters
  newUrl.search = request.nextUrl.search;
  
  // Redirecionar para a URL com o locale detectado
  return NextResponse.redirect(newUrl);
}

// Configurar a middleware para ser executada apenas nas páginas (não em arquivos estáticos)
export const config = {
  matcher: [
    // Ignora APIs, arquivos estáticos e qualquer coisa com extensão
    '/((?!api|_next|favicon.ico|.*\\..*).*)'
  ]
};