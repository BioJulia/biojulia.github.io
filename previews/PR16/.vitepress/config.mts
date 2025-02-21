import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import mathjax3 from "markdown-it-mathjax3";
import footnote from "markdown-it-footnote";

function getBaseRepository(base: string): string {
  if (!base || base === '/') return '/';
  const parts = base.split('/').filter(Boolean);
  return parts.length > 0 ? `/${parts[0]}/` : '/';
}

const baseTemp = {
  base: '/BioJuliaDocs/previews/PR16/',// TODO: replace this in makedocs!
}

const navTemp = {
  nav: [
{ text: 'Getting Started', collapsed: false, items: [
{ text: 'Installing Julia', link: '/getting_started/juliainstallation' },
{ text: 'Installing Development Tools', link: '/getting_started/toolsinstallation' },
{ text: 'Installing BioJulia Packages', link: '/getting_started/biojuliainstallation' },
{ text: 'Case Scenarios', link: '/getting_started/casescenarios' }]
 },
{ text: 'Comparison With Other Packages/Ecosystems', collapsed: false, items: [
{ text: 'Biopython (Python3)', link: '/comparisons/biopython' },
{ text: 'scikit-bio (Python3)', link: '/comparisons/scikitbio' },
{ text: 'Bioconductor (R)', link: '/comparisons/bioconductor' },
{ text: 'BioJava (Java)', link: '/comparisons/biojava' },
{ text: 'BioPerl (Perl5)', link: '/comparisons/bioperl' },
{ text: 'BioRuby (Ruby)', link: '/comparisons/bioruby' }]
 },
{ text: 'What is BioJulia?', collapsed: false, items: [
{ text: 'Overview', link: '/overview' }]
 }
]
,
}

const nav = [
  ...navTemp.nav,
  {
    component: 'VersionPicker'
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/BioJuliaDocs/previews/PR16/',// TODO: replace this in makedocs!
  title: 'BioJulia Unified Docs',
  description: 'Documentation for BioJuliaDocs',
  lastUpdated: true,
  cleanUrls: true,
  outDir: '../final_site', // This is required for MarkdownVitepress to work correctly...
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', {src: `${getBaseRepository(baseTemp.base)}versions.js`}],
    // ['script', {src: '/versions.js'], for custom domains, I guess if deploy_url is available.
    ['script', {src: `${baseTemp.base}siteinfo.js`}]
  ],
  ignoreDeadLinks: true,
  vite: {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ], 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ], 
    },
  },
  markdown: {
    math: true,
    config(md) {
      md.use(tabsMarkdownPlugin),
      md.use(mathjax3),
      md.use(footnote)
    },
    theme: {
      light: "github-light",
      dark: "github-dark"}
  },
  themeConfig: {
    outline: 'deep',
    logo: { src: '/logo.png', width: 24, height: 24},
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav,
    sidebar: [
{ text: 'Getting Started', collapsed: false, items: [
{ text: 'Installing Julia', link: '/getting_started/juliainstallation' },
{ text: 'Installing Development Tools', link: '/getting_started/toolsinstallation' },
{ text: 'Installing BioJulia Packages', link: '/getting_started/biojuliainstallation' },
{ text: 'Case Scenarios', link: '/getting_started/casescenarios' }]
 },
{ text: 'Comparison With Other Packages/Ecosystems', collapsed: false, items: [
{ text: 'Biopython (Python3)', link: '/comparisons/biopython' },
{ text: 'scikit-bio (Python3)', link: '/comparisons/scikitbio' },
{ text: 'Bioconductor (R)', link: '/comparisons/bioconductor' },
{ text: 'BioJava (Java)', link: '/comparisons/biojava' },
{ text: 'BioPerl (Perl5)', link: '/comparisons/bioperl' },
{ text: 'BioRuby (Ruby)', link: '/comparisons/bioruby' }]
 },
{ text: 'What is BioJulia?', collapsed: false, items: [
{ text: 'Overview', link: '/overview' }]
 }
]
,
    editLink: { pattern: "https://https://github.com/BioJulia/BioJuliaDocs/edit/main/docs/src/:path" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BioJulia/BioJuliaDocs' }
    ],
    footer: {
      message: 'Made with <a href="https://luxdl.github.io/DocumenterVitepress.jl/dev/" target="_blank"><strong>DocumenterVitepress.jl</strong></a><br>',
      copyright: `© Copyright ${new Date().getUTCFullYear()}.`
    }
  }
})
