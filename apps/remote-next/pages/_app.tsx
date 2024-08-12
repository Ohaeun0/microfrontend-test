import { AppProps } from 'next/app';
import { JotaiProvider } from '@repo/jotai';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <Component {...pageProps} />
    </JotaiProvider>
  );
}

export default MyApp;
