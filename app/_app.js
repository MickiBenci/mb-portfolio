import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://example.com/script.js"
        onLoad={console.log("carico")}
      />
    </>
  );
}
