import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

// const App=({ Component, pageProps })=>{
//   return <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
// }

const App=({ Component, pageProps })=>{
  return <>
      <Component {...pageProps} />
    </>
}

export default App
