

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    reactStrictMode: true,
    defaultShowCopyCode: true,
    codeHighlight: true,
    staticImage: false,
    readingTime: true,
    experimental: {
      serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma']
    },
    // remarkPlugins: [
    //   [
    //     mdxMermaid.default, {
    //       theme: { light: 'neutral', dark: 'forest' }
    //     }
    //   ],
    // ],
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) config.node = { fs: 'empty' }
      return config
    }
  })

module.exports = withNextra()
