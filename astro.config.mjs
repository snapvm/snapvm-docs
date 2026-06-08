import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.snapvm.dev",
  integrations: [
    starlight({
      title: "SnapVM Docs",
      description:
        "Documentation for SnapVM, a browser-accessible cloud development environment powered by persistent Sprites.",
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/snapvm-logo.svg",
        alt: "SnapVM",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Header: "./src/components/Header.astro",
        MobileMenuFooter: "./src/components/MobileMenuFooter.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        LanguageSelect: "./src/components/LanguageSelect.astro",
      },
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        ja: {
          label: "日本語",
          lang: "ja",
        },
      },
      sidebar: [
        {
          label: "Getting started",
          translations: { ja: "はじめに" },
          items: [
            { label: "Overview", translations: { ja: "概要" }, slug: "index" },
            {
              label: "Quickstart",
              translations: { ja: "クイックスタート" },
              slug: "quickstart",
            },
            {
              label: "Working with SnapVM",
              translations: { ja: "SnapVM の使い方" },
              slug: "working-with-snapvm",
            },
          ],
        },
        {
          label: "Concepts",
          translations: { ja: "概念" },
          items: [
            {
              label: "Machines",
              translations: { ja: "マシン" },
              slug: "concepts/machines",
            },
            {
              label: "Terminal sessions",
              translations: { ja: "ターミナルセッション" },
              slug: "concepts/terminal-sessions",
            },
            {
              label: "Services",
              translations: { ja: "サービス" },
              slug: "concepts/services",
            },
            {
              label: "Storage and lifecycle",
              translations: { ja: "ストレージとライフサイクル" },
              slug: "concepts/storage-lifecycle",
            },
          ],
        },
        {
          label: "CLI Reference",
          translations: { ja: "CLI リファレンス" },
          items: [
            {
              label: "Installation",
              translations: { ja: "インストール" },
              slug: "cli/installation",
            },
            {
              label: "Authentication",
              translations: { ja: "認証" },
              slug: "cli/authentication",
            },
            {
              label: "Commands",
              translations: { ja: "コマンド" },
              slug: "cli/commands",
            },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/snapvm/snapvm-docs",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/snapvm/snapvm-docs/edit/main/",
      },
    }),
  ],
});
