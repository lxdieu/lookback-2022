import type { AppProps } from 'next/app'
import "src/styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
