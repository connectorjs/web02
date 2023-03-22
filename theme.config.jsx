/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Head } from 'next/head'
import { useConfig } from 'nextra-theme-docs'
import {Image } from 'next/image'
import ThemeButton from '@/components/ThemeButton'

const Logo = () => {
  return <>
    <img 
      src='/assets/logo/logo.png'
      alt='logo'
      style={{ height: '64px' }}
      // style={{ height: '32px', filter:'invert(1)' }}
    />
  </>
  
}

const Footer =()=>{
  return <footer className='nx-mx-auto nx-flex nx-max-w-[90rem] nx-border-t  dark:nx-border-neutral-800 contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400 '>
  <div className='nx-py-12 nx-px-6  nx-flex nx-w-full nx-flex-row nx-justify-end'>
    <div >
      <a className="nx-flex nx-items-center nx-gap-1" target="_blank" rel="noopener noreferrer" title="miajupiter.com homepage" href="https://miajupiter.com">
        <span>Powered by</span>
        <img src='/assets/logo/miajupiter-logo.svg' style={{ height: '32px' }} />
      </a>
    </div>
    {/* <p>{new Date().getFullYear()} © <a href='https://miajupiter.com' target="_blank">MiaJupiter.com</a></p> */}
  </div>
</footer>
}

export default {
  logo: <Logo />,
  project: {
    // link:'https://github.com/connectorjs/web01'
  },
  search: {
    placeholder: 'Search'
  },
  darkMode: false,
  darkMode: ['class', '[data-mode="dark"]'],
  nextThemes: {
    defaultTheme: 'dark',
    themes : ['light', 'dark'],
    darkMode: ['class', '[data-mode="dark"]'],
    
  },
  docsRepositoryBase: 'https://github.com/connectorjs/web02/blob/main',
  // editLink: {
  //   // text: 'Github Repository',
  //   component: <GithubEditLink />,
  // },
  // feedback: {
  //   labels: 'string values',
  //   content: null,
  // },
  head: ({ locale, title, config, meta }) => (
    <>
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="ConnectorJS" />
      <link href="/assets/logo/icon.png" rel="icon" type="image/png" />
      {/* <link href="assets/logo/icon.svg" rel="icon" type="image/svg+xml" /> */}
      {/* <link href="assets/img/logo-light.svg" rel="icon" type="image/svg+xml" media="(prefers-color-scheme: light)" /> */}
    </>),
  footer: {
    // text:'(c) 2023 MiaJupiter'
    component: <Footer />,

  },
  useNextSeoProps() {
    const config = useConfig()
    const { frontMatter } = config
    const desc = 'ConnectorJS: Data connection platform..'

    return {
      description:
        frontMatter.description || desc,
      openGraph: {
        images: [
          { url: frontMatter.image || '/assets/img/logo.png' }
        ]
      },

      titleTemplate: '%s – ConnectorJS',
      twitter: {
        cardType: 'summary_large_image',
        site: '@connectorjs_'
      },
    
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: false
  },
  banner: {
    dismissible: true,
    key: 'miajupiter12',
    text:  <a href="https://connectorjs.com" target="_blank">
    🎉 Connector.js is released. Read more →
  </a>
  },
  primaryHue: {
    dark: 170,
    light: 212
  },
  navbar:{
    // component: <ThemeButton />,
    // extraContent: <ThemeButton style={{top:'-32px', position:'relative'}} />,
    extraContent: <ThemeButton />,
  }
  
  
  
}
