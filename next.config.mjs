import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
};

export default withFlowbiteReact(nextConfig);
